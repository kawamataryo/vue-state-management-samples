<template>
  <div>
    <h1 class="bu-title is-4 mt-5">
      State management with
      <a href="https://github.com/vuejs/vuex" target="_blank">Vuex4 🔋</a>
    </h1>
    <CardLayout>
      <Counter />
      <div class="bu-buttons is-centered mt-4">
        <IncrementButton />
        <DecrementButton />
      </div>
    </CardLayout>
    <h2 class="is-size-4 mt-5">Store</h2>
    <CodeBlock path="src/stores/vuex/store.ts" :code="code" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardLayout from "@/components/common/CardLayout.vue";
import Counter from "@/components/vuex/Counter.vue";
import IncrementButton from "@/components/vuex/IncrementButton.vue";
import DecrementButton from "@/components/vuex/DecrementButton.vue";
import CodeBlock from "@/components/common/CodeBlock.vue";

const STORE_CODE_BLOCK = `
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
`;

export default defineComponent({
  name: "Vuex",
  components: {
    DecrementButton,
    IncrementButton,
    CardLayout,
    Counter,
    CodeBlock
  },
  setup() {
    return {
      code: STORE_CODE_BLOCK
    };
  }
});
</script>
