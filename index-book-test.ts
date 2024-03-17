import {ApolloServer, gql} from "apollo-server";
import {readFileSync} from "node:fs";
import {makeExecutableSchema} from "@graphql-tools/schema";

console.log("Starting books graph ql!");

const resolvers = {
  Book: {
    __resolveType(book: any, contextValue: any, info: any){
      // Only Textbook has a courses field
      if(book.courses){
        return 'Textbook';
      }
      // Only ColoringBook has a colors field
      if(book.colors){
        return 'ColoringBook';
      }
      return null; // GraphQLError is thrown
    },
  },
  Query: {
    books: () => {
      return [
        {
          title: "abc",
          author: "123",
          courses: ["abc"]
        }
      ]
    }
  },
};

const typeDefs = gql(readFileSync("graphs/books.graphql").toString());

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversToMatchSchema: 'ignore'},
});

const server = new ApolloServer({
  schema,
  introspection: true
});

server.listen(4010).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

process.on("SIGINT", () => {
  console.log("Received SIGINT signal. Exiting...");
  // Perform any cleanup operations if necessary
  process.exit(0);
});
