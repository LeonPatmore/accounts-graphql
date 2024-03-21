import TokenAccount from "./model";

const resolvers = {
  Account: {
    __resolveType(obj: any, contextValue: any, info: any) {
      if (obj.accountType == "TOKENS_ACCOUNT") {
        return "TokensAccount";
      }
      if (obj.accountType == "BUSINESS_ACCOUNT") {
        return "BusinessAccount";
      }
      return null;
    },
  },
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
    accounts: async () => {
      console.log(`Resolving all accounts!`);
      const businessAccounts = await resolveAccountsOfType(
        "businessAccounts",
        "id%20name%20businessId%20accountType",
      );
      console.log(`Business accounts are ${JSON.stringify(businessAccounts)}`);
      const tokensAccounts = await resolveAccountsOfType(
        "tokensAccounts",
        "id%20name%20token%20accountType",
      );
      console.log(`Tokens accounts are ${JSON.stringify(tokensAccounts)}`);
      return businessAccounts.concat(tokensAccounts);
    },
  },
};

async function resolveAccountsOfType(
  name: string,
  fields: string,
): Promise<Array<any>> {
  const res = await fetch(
    `http://localhost:4006/graphql?query={${name}{${fields}}}`,
  );
  const data = await res.json();
  return data.data[name];
}

export default resolvers;
