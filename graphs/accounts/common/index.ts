import startServer from "../../subgraph-server";
import resolvers from "./resolvers";

startServer("graphs/accounts/common/schema.graphql", 4000, resolvers);
