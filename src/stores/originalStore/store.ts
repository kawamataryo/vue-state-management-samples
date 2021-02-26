import { reactive, inject, provide, InjectionKey } from "vue";
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
    state,
    mutations
  };
};

type Store = ReturnType<typeof createStore>;

export const STORE_KEY: InjectionKey<DeepReadonly<Store>> = Symbol("Store");

export const initializeStore = () => {
  provide(STORE_KEY, createStore());
};

export const useStore = () => {
  return inject(STORE_KEY);
};
