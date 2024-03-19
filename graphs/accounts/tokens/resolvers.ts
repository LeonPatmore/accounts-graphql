import TokenAccount from "./model";

const resolvers = {
  Query: {
    tokensAccounts: async () =>
      TokenAccount.find().then((accounts) => {
        console.log(accounts);
        return accounts.map((account) => {
          return {
            id: account["externalId"],
            token: account["token"],
          };
        });
      }),
  },
};

export default resolvers;
