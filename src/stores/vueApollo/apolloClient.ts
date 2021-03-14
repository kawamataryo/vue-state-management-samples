import ApolloClient from "apollo-boost";
import { typeDefs } from "@/stores/vueApollo/typeDefs";
import { InMemoryCache } from "apollo-cache-inmemory";
import { resolvers } from "@/stores/vueApollo/resolvers";

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  cache,
  typeDefs,
  resolvers
});

// storeの初期化
cache.writeData({
  data: {
    store: {
      __typename: "Store",
      count: 0
    }
  }
});
