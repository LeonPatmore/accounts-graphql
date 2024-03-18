import Account from "./model";

const resolvers = {
  Query: {
    accounts: async () => Account.find(),
  },
  Mutation: {
    createStaticAccount: async (_: any, { externalId, name }: any) => {
      console.log(
        `Creating static account with name [ ${name} ] and external id [ ${externalId} ]`,
      );
      const account = new Account({ externalId, name });
      return await account.save();
    },
  },
};

export default resolvers;
