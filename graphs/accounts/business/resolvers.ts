import BusinessAccount from "./model";

const resolvers = {
  Query: {
    businessAccounts: async () =>
      BusinessAccount.find().then((accounts) => {
        console.log(accounts);
        return accounts.map((account) => {
          return {
            id: account["externalId"],
            businessId: account["businessId"],
          };
        });
      }),
  },
};

export default resolvers;
