import { reactive, inject, InjectionKey, toRefs } from "vue";
import { DeepReadonly } from "utility-types";

export const createStore = () => {
  const state = reactive({
    count: 0
  });

  const actions = {
    increment: () => {
      state.count++;
    },
    decrement: () => {
      state.count--;
    }
  };

  return {
    state: toRefs(state),
    actions
  };
};

type Store = ReturnType<DeepReadonly<typeof createStore>>;

export const STORE_KEY: InjectionKey<Store> = Symbol("Store");

export const useStore = () => {
  return inject(STORE_KEY) as Store;
};
