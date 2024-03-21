import { ApolloServer } from "apollo-server";
import "../../mongo/mongo";
import { readFileSync } from "node:fs";
import { ApolloGateway } from "@apollo/gateway";

const supergraphSdl = readFileSync("generated/supergraph.graphql").toString();

const gateway = new ApolloGateway({ supergraphSdl });

const server = new ApolloServer({
  gateway,
});

server.listen(4006).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

process.on("SIGINT", () => {
  console.log("Received SIGINT signal. Exiting...");
  process.exit(0);
});
