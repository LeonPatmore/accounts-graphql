import Account from "./model";

const resolvers = {
  Query: {
    accounts: async () => Account.find(),
  },
  Mutation: {
    createTokensAccount: async (_: any, { externalId, name, token }: any) => {
      console.log(
        `Creating tokens account with name [ ${name} ] and external id [ ${externalId} ] and token [ ${token} ]`,
      );
      const account = new Account({ externalId, name, token });
      return await account.save();
    },
  },
};

export default resolvers;
