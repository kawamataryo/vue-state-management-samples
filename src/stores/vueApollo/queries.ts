import gql from "graphql-tag";

export const COUNT_QUERY = gql`
  query CountQuery {
    store @client {
      count
    }
  }
`;
