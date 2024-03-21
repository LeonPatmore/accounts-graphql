# Accounts GraphQL

A demo for GraphQL, focusing on federation.

We have 4 sub-graphs here:
- Common: Common fields for accounts.
- Business: Business account implementation.
- Tokens: Tokens account implementation.
- Main: Graph for dealing with generic queries.

## GraphQL Basics

[See here.](./GraphQLBasics.md)

## Local Running

### Commands

1. `make start-mongo`
2. Now start each graph (there is 4 sub-graphs to run).
   1. `make run-common-account`.
   2. `make run-tokens-account`
   3. `make run-business-account`
   4. `make run-main`
3. Run the super graph: `make run-super`.

### Links

- MongoDB UI: http://localhost:8081/ (default credentials are `admin:pass`).

### Postman

[Collections are here](./postman)!

## Resources

- GraphQL's basics: https://graphql.org/learn/schema/#scalar-types
- Apollo graph basics: https://www.apollographql.com/docs/
- https://graphql.org/graphql-js/running-an-express-graphql-server/
- https://dgraph.io/
- https://github.com/strawberry-graphql/strawberry
