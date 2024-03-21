import startServer from "../../subgraph-server";
import resolvers from "./resolvers";

startServer("graphs/accounts/business/schema.graphql", 4004, resolvers);
