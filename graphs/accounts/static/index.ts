import startServer from "../../subgraph-server";
import resolvers from "./resolvers";

startServer("graphs/accounts/static/schema.graphql", 4000, resolvers);
