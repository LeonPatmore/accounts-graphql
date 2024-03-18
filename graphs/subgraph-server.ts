import { ApolloServer, gql } from "apollo-server";
import "../mongo/mongo";
import { readFileSync } from "node:fs";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { GraphQLResolverMap } from "@apollo/subgraph/src/schema-helper/resolverMap";

function startServer(
  graphQlFile: string,
  port: number,
  resolvers: GraphQLResolverMap<any>,
) {
  const typeDefs = gql(
    readFileSync(graphQlFile, { encoding: "utf-8" }).toString(),
  );

  const schema = buildSubgraphSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    introspection: true,
  });

  server.listen(port).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });

  process.on("SIGINT", () => {
    console.log("Received SIGINT signal. Exiting...");
    process.exit(0);
  });
}

export default startServer;
