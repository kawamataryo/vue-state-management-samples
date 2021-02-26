import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Store {
    count: Int!
  }
  extend type Mutation {
    increment: Int
    decrement: Int
  }
`;
