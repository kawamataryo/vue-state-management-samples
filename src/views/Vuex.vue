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
    <Tabs
      class="mt-5"
      :tabs="tabs"
      :active-tab-id="activeTabId"
      @selected="onSelected"
    />
    <template v-if="tabs[0].id === activeTabId">
      <CodeBlock path="src/stores/vuex/store.ts" :code="storeCodeBlock" />
    </template>
    <template v-if="tabs[1].id === activeTabId">
      <CodeBlock
        path="src/components/vuex/Counter.vue"
        :code="counterCodeBlock"
        langage="markup"
      />
      <CodeBlock
        class="mt-3"
        path="src/components/vuex/IncrementButton.vue"
        :code="incrementButtonCodeBlock"
        langage="markup"
      />
      <CodeBlock
        class="mt-3"
        path="src/components/vuex/IncrementButton.vue"
        :code="decrementButtonCodeBlock"
        langage="markup"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CardLayout from "@/components/common/CardLayout.vue";
import Counter from "@/components/vuex/Counter.vue";
import IncrementButton from "@/components/vuex/IncrementButton.vue";
import DecrementButton from "@/components/vuex/DecrementButton.vue";
import CodeBlock from "@/components/common/CodeBlock.vue";
import Tabs from "@/components/common/Tabs.vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import storeCodeBlock from "!!raw-loader!../stores/vuex/store";
import counterCodeBlock from "!!raw-loader!../components/vuex/Counter.vue";
import incrementButtonCodeBlock from "!!raw-loader!../components/vuex/IncrementButton.vue";
import decrementButtonCodeBlock from "!!raw-loader!../components/vuex/DecrementButton.vue";

const TABS = [
  { id: 1, name: "Store" },
  { id: 2, name: "Components" }
];

export default defineComponent({
  name: "Vuex",
  components: {
    Tabs,
    DecrementButton,
    IncrementButton,
    CardLayout,
    Counter,
    CodeBlock
  },
  setup() {
    const activeTabId = ref(1);
    const onSelected = (id: number) => {
      activeTabId.value = id;
    };
    return {
      onSelected,
      activeTabId,
      tabs: TABS,
      counterCodeBlock,
      storeCodeBlock,
      incrementButtonCodeBlock,
      decrementButtonCodeBlock
    };
  }
});
</script>
