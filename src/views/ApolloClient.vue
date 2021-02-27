<template>
  <div>
    <h1 class="bu-title is-4 mt-5">
      State management with
      <a href="https://v4.apollo.vuejs.org" target="_blank">Apollo Client 🚀</a>
    </h1>
    <CardLayout>
      <Counter />
      <div class="bu-buttons is-centered mt-4">
        <IncrementButton />
        <DecrementButton />
      </div>
    </CardLayout>
    <h2 class="is-size-4 mt-5">Store</h2>
    <CodeBlock
      path="src/stores/apolloClient/apolloClient.ts"
      :code="clientCode"
    />
    <CodeBlock
      path="src/stores/apolloClient/typeDefs.ts"
      :code="typeDefsCode"
    />
    <CodeBlock
      path="src/stores/apolloClient/resolvers.ts"
      :code="resolverCode"
    />
    <CodeBlock path="src/stores/apolloClient/queries.ts" :code="queriesCode" />
    <CodeBlock
      path="src/stores/apolloClient/mutations.ts"
      :code="mutationsCode"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardLayout from "@/components/common/CardLayout.vue";
import Counter from "@/components/apolloClient/Counter.vue";
import IncrementButton from "@/components/apolloClient/IncrementButton.vue";
import DecrementButton from "@/components/apolloClient/DecrementButton.vue";
import CodeBlock from "@/components/common/CodeBlock.vue";

const APOLLO_CLIENT_CODE = `
import ApolloClient from "apollo-boost";
import { typeDefs } from "@/stores/apolloClient/typeDefs";
import { InMemoryCache } from "apollo-cache-inmemory";
import { resolvers } from "@/stores/apolloClient/resolvers";

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
`;

const APOLLO_RESOLVERS_CODE = `
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
`;

const APOLLO_TYPE_DEFS_CODE = `
import gql from "graphql-tag";

export const typeDefs = gql\`
  extend type Store {
    count: Int!
  }
  extend type Mutation {
    increment: Int
    decrement: Int
  }
\`;
`;

const APOLLO_QUERIES_CODE = `
import gql from "graphql-tag";

export const COUNT_QUERY = gql\`
  query CountQuery {
    store @client {
      count
    }
  }
\`;
`;

const APOLLO_MUTATIONS_CODE = `
import gql from "graphql-tag";

export const INCREMENT_MUTATION = gql\`
  mutation incrementMutation {
    increment @client
  }
\`;

export const DECREMENT_MUTATION = gql\`
  mutation decrementMutation {
    decrement @client
  }
\`;
`;

export default defineComponent({
  name: "Pinia",
  components: {
    CodeBlock,
    DecrementButton,
    IncrementButton,
    CardLayout,
    Counter
  },
  setup() {
    return {
      clientCode: APOLLO_CLIENT_CODE,
      resolverCode: APOLLO_RESOLVERS_CODE,
      typeDefsCode: APOLLO_TYPE_DEFS_CODE,
      mutationsCode: APOLLO_MUTATIONS_CODE,
      queriesCode: APOLLO_QUERIES_CODE
    };
  }
});
</script>
