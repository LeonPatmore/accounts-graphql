import { ApolloServer } from "apollo-server";
import "./mongo/mongo";
import typeDefs from "./schema";
import resolvers from "./mongo/resolvers";

console.log("Starting accounts graph ql!");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

process.on("SIGINT", () => {
  console.log("Received SIGINT signal. Exiting...");
  // Perform any cleanup operations if necessary
  process.exit(0);
});
