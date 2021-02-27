<template>
  <div>
    <h1 class="bu-title is-4 mt-5">
      State management with
      <a href="https://github.com/posva/pinia" target="_blank">Pinia 🍍</a>
    </h1>
    <CardLayout>
      <Counter />
      <div class="bu-buttons is-centered mt-4">
        <IncrementButton />
        <DecrementButton />
      </div>
    </CardLayout>
    <h2 class="is-size-4 mt-5">Store</h2>
    <CodeBlock path="src/stores/plina/store.ts" :code="code"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardLayout from "@/components/common/CardLayout.vue";
import Counter from "@/components/pinia/Counter.vue";
import IncrementButton from "@/components/pinia/IncrementButton.vue";
import DecrementButton from "@/components/pinia/DecrementButton.vue";
import CodeBlock from "@/components/common/CodeBlock.vue";

const STORE_CODE_BLOCK = `
import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 10
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
`

export default defineComponent({
  name: "Pinia",
  components: {
    CodeBlock,
    DecrementButton,
    IncrementButton,
    CardLayout,
    Counter,
  },
  setup() {
    return {
      code: STORE_CODE_BLOCK
    };
  }
});
</script>
