<template>
  <div>
    <h1 class="bu-title is-4 mt-5">
      State management with Original Store 📁
    </h1>
    <CardLayout>
      <Counter />
      <div class="bu-buttons is-centered mt-4">
        <IncrementButton />
        <DecrementButton />
      </div>
    </CardLayout>
    <h2 class="is-size-4 mt-5">Store</h2>
    <CodeBlock path="src/stores/originalStore/store.ts" :code="code" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardLayout from "@/components/common/CardLayout.vue";
import Counter from "@/components/originalStore/Counter.vue";
import IncrementButton from "@/components/originalStore/IncrementButton.vue";
import DecrementButton from "@/components/originalStore/DecrementButton.vue";
import CodeBlock from "@/components/common/CodeBlock.vue";

const STORE_CODE_BLOCK = `
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

type Store = ReturnType<DeepReadonly<typeof createStore>>;

const STORE_KEY: InjectionKey<Store> = Symbol("Store");

export const initializeStore = () => {
  provide(STORE_KEY, createStore());
};

export const useStore = () => {
  return inject(STORE_KEY) as Store;
};
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
      code: STORE_CODE_BLOCK
    };
  }
});
</script>
