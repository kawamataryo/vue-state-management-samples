import { InMemoryCache } from "apollo-cache-inmemory";
import { COUNT_QUERY } from "@/stores/apolloClient/queries";

export const resolvers = {
  Mutation: {
    increment: (
      _: unknown,
      _arg: unknown,
      { cache }: { cache: InMemoryCache }
    ) => {
      const data = cache.readQuery<any>({ query: COUNT_QUERY });
      data.store.count++;
      cache.writeQuery({ query: COUNT_QUERY, data });
      return data.store.count;
    },
    decrement: (
      _: unknown,
      _arg: unknown,
      { cache }: { cache: InMemoryCache }
    ) => {
      const data = cache.readQuery<any>({ query: COUNT_QUERY });
      data.store.count--;
      cache.writeQuery({ query: COUNT_QUERY, data });
      return data.store.count;
    }
  }
};
