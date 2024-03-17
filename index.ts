import {ApolloServer, gql} from "apollo-server";
import "./mongo/mongo";
import resolvers from "./mongo/resolvers";
import {readFileSync} from "node:fs";
import {makeExecutableSchema} from "@graphql-tools/schema";

console.log("Starting accounts graph ql!");

const graphQlFile = process.env.GRAPH_QL_FILE
const port = process.env.PORT || 4000

const typeDefs = gql(readFileSync(graphQlFile!!, { encoding: 'utf-8' }).toString());

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversToMatchSchema: 'ignore'},
});

const server = new ApolloServer({
  schema,
  introspection: true
});

server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

process.on("SIGINT", () => {
  console.log("Received SIGINT signal. Exiting...");
  // Perform any cleanup operations if necessary
  process.exit(0);
});
