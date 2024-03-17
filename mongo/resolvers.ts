import User from "./user";
import Account from "./account";

const resolvers = {
  Account: {
    __resolveType(account: any, contextValue: any, info: any) {
      return 'TokensAccount'
      // if (account.token) {
      //   return 'TokensExternalAccount'
      // }
      // return null
    }
  },
  Query: {
    accounts: async () => Account.find(),
    users: async () => User.find(),
    user: async (_: any, { id }: any) => User.findById(id),
  },
  Mutation: {
    createUser: (_: any, { username, email }: any) => {
      const user = new User({ username, email });
      return user.save();
    },
    createTokensAccount: (_: any, { externalId, name, token }: any) => {
      const account = new Account({ externalId, name, token });
      return account.save();
    },
  },
};

export default resolvers;
