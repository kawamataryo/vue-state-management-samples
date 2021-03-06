# vue-state-management-samples
Vue.js state management samples.

[Demo site](https://vue-state-management-compare.vercel.app/vuex)

![](https://i.gyazo.com/0b3acd2b4e1011fa7fb08ead6d6ce0f1.png)

## [Vuex4](https://github.com/vuejs/vuex)
### Store
[src/stores/vuex/store.ts](https://github.com/kawamataryo/vue-state-management-samples/blob/main/src/stores/vuex/store.ts)
```ts
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    }
  }
});
```

---

## [Pinia](https://github.com/posva/pinia)
### Store
[src/stores/pinia/store.ts ](https://github.com/kawamataryo/vue-state-management-samples/blob/main/src/stores/pinia/store.ts)

```ts
import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
});
```

---

## [Apollo Client](https://apollo.vuejs.org/guide/local-state.html)
### Store
[src/stores/apolloClient/apolloClient.ts ](https://github.com/kawamataryo/vue-state-management-samples/blob/main/src/stores/apolloClient/apolloClient.ts)
```ts
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
```

[src/stores/apolloClient/typeDefs.ts](https://github.com/kawamataryo/vue-state-management-samples/blob/main/src/stores/apolloClient/typeDefs.ts)

```ts
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
```

[src/stores/apolloClient/mutations.ts](https://github.com/kawamataryo/vue-state-management-samples/blob/main/src/stores/apolloClient/mutations.ts)
```ts
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
```

[src/stores/apolloClient/queries.ts](https://github.com/kawamataryo/vue-state-management-samples/blob/main/src/stores/apolloClient/queries.ts)

```ts
import gql from "graphql-tag";

export const COUNT_QUERY = gql`
  query CountQuery {
    store @client {
      count
    }
  }
`;
```

[src/stores/apolloClient/resolvers.ts ](https://github.com/kawamataryo/vue-state-management-samples/blob/main/src/stores/apolloClient/resolvers.ts)

```ts
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
```

---

## Original Store
### Store
[src/stores/originalStore/store.ts](https://github.com/kawamataryo/vue-state-management-samples/blob/main/src/stores/originalStore/store.ts)
```ts
import { reactive, inject, provide, InjectionKey, toRefs } from "vue";
import { DeepReadonly } from "utility-types";

const createStore = () => {
  const state = reactive({
    count: 0
  });

  const mutations = {
    increment: () => {
      state.count++;
    },
    decrement: () => {
      state.count--;
    }
  };

  return {
    state: toRefs(state),
    mutations
  };
};

type Store = ReturnType<DeepReadonly<typeof createStore>>;

const STORE_KEY: InjectionKey<Store> = Symbol("Store");

export const initializeStore = () => {
  provide(STORE_KEY, createStore());
};

export const useStore = () => {
  return inject(STORE_KEY) as Store;
};

```
