import startServer from "../../subgraph-server";
import resolvers from "./resolvers";

startServer("graphs/accounts/main/schema.graphql", 4006, resolvers);
