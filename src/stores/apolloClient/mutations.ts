import gql from "graphql-tag";

export const INCREMENT_MUTATION = gql`
  mutation incrementMutation {
    increment @client
  }
`;

export const DECREMENT_MUTATION = gql`
  mutation decrementMutation {
    decrement @client
  }
`;
