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
