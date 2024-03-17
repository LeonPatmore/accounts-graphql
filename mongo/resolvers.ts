import User from "./user";
import account from "./account";

const resolvers = {
  Query: {
    accounts: async () => account.find(),
    users: async () => User.find(),
    user: async (_: any, { id }: any) => User.findById(id),
  },
  Mutation: {
    createUser: (_: any, { username, email }: any) => {
      const user = new User({ username, email });
      return user.save();
    },
  },
};

export default resolvers;
