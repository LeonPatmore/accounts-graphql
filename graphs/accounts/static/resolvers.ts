import Account from "./model";

const resolvers = {
  Account: {
    __resolveReference(account: any) {
      console.log(`Trying to find account with id [ ${account.id} ]`);
      return Account.find({ externalId: account.id }).then((accounts) => {
        return accounts[0];
      });
    },
  },
};

export default resolvers;
