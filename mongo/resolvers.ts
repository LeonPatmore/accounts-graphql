import User from "./user";

const resolvers = {
  Query: {
    users: () => User.find(),
    user: (_: any, { id }: any) => User.findById(id),
  },
  Mutation: {
    createUser: (_: any, { username, email }: any) => {
      const user = new User({ username, email });
      return user.save();
    },
  },
};

export default resolvers;
