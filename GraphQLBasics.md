# GraphQL Basics

## Types and Fields

### Supported Types

- Scalar types
- Object type
- Special types
- Enum
- Input
- Union
- Interface

### Objects

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

#### Naming Conventions

- Fields names should be `camelCase`.
- Type names should be `PascalCase`.
- Enum names should be `PascalCase`.
- Enum names should be `ALL_CAPS`.

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

#### Query and Mutations

These special types act as possible entry points to a graph.
The difference between them is mostly convention, but there is a slight technical difference.

See https://stackoverflow.com/a/52551263 for more information.

### Enums

A scalar that represents a finite amount of values.

```
enum Episode {
  NEWHOPE
  EMPIRE
  JEDI
}
```

### Union

A union type means the field type is one of the list:

```
union Media = Book | Movie
```

## Queries and Mutations

### Aliases

Aliases provide a way to set the returned field name. This allows you to request two
objects in the same request, for example:

```
query {
    first: user(id: \"65f249307d6e9c957848867a\") {
        id username email
    }
    second: user(id: \"65f633041c7e65895bfaaa03\") {
        id username email
    }
}
```

In this case, instead of the returned data having field name `user`, it will have field names
`first` and `second`.

### Fragments

Fragments allow you to define a set of fields. For example:

```
fragment userFields on User {
    id username email
}
```

Then you can use this fragment when querying:

```
query {
    first: user(id: \"65f249307d6e9c957848867a\") {
        ...userFields
    }
    second: user(id: \"65f633041c7e65895bfaaa03\") {
        ...userFields
    }
}
```

## Resolvers

A resolver is a function that's responsible for populating the
data for a single field in your schema.

Resolvers generally accept 4 positional arguments:

- `parent`
- `args`
- `contextValue`
- `info`
