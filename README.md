# Accounts GraphQL

## GraphQL Basics

[See here.](./GraphQLBasics.md)

## Local Running

### Commands

1. `make start-mongo`
2. `make run`

### Links

- MongoDB UI: http://localhost:8081/

## HTTP Requests

### Creating a User

```shell
curl --location 'http://localhost:4000/graphql' \
--header 'Content-Type: application/json' \
--data-raw '{
  "query": "mutation CreateUser($username: String!, $email: String!) { createUser(username: $username, email: $email) { id username email } }",
  "variables": {
    "username": "Leon",
    "email": "a@b.com"
    }
}'
```

### Getting Users

```shell
curl --location 'http://localhost:4000/graphql' \
--header 'Content-Type: application/json' \
--data '{
    "query": "query { users { id username email } }"
}'
```

## Resources

- GraphQL basics: https://graphql.org/learn/schema/#scalar-types
- Apollo graph basics: https://www.apollographql.com/docs/
- https://graphql.org/graphql-js/running-an-express-graphql-server/
