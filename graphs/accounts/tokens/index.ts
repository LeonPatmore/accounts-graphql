import startServer from "../../subgraph-server";
import resolvers from "./resolvers";

startServer("graphs/accounts/tokens/schema.graphql", 4002, resolvers);
