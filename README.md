# Accounts GraphQL

## GraphQL Basics

### Object Types and Fields

An object type is:

```
type Character {
  name: String!
  appearsIn: [Episode!]!
}
```

- This object has fields `name` and `appearsIn`.
- `String` is a built-in type.
- `String!` means the field is non-nullable.
- `[Episode!]!` is an array of `Episode` objects.

### Arguments

Every field on an object can have zero or more arguments.

```
type Starship {
  id: ID!
  name: String!
  length(unit: LengthUnit = METER): Float
}
```

In this case, `length` has one argument called `unit`.

Arguments support the following:
- Types.
- Default values.
- Required/optional.

### Supported Types

- Scalar types
- Object type
- Special types
- Enum
- Input
- Union
- Interface

### Scalar Types

Scalar types don't have any subfields, they are representing concrete data.

- Int
- Float
- String
- Boolean
- ID

#### Custom Scalar Types

You can define custom scalar types:

```
scalar Date
```

### Special Types

There are three special types within a schema:
- `query`
- `mutation`
- `subscription`

### Enums

A scalar that represents a finite amount of values.

```
enum Episode {
  NEWHOPE
  EMPIRE
  JEDI
}
```

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

- https://www.apollographql.com/docs/
- https://graphql.org/graphql-js/running-an-express-graphql-server/
