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
    <Tabs
      class="mt-5"
      :tabs="tabs"
      :active-tab-id="activeTabId"
      @selected="onSelected"
    />
    <template v-if="tabs[0].id === activeTabId">
      <CodeBlock
        path="src/stores/originalStore/store.ts"
        :code="storeCodeBlock"
      />
    </template>
    <template v-if="tabs[1].id === activeTabId">
      <CodeBlock path="src/main.ts" :code="installCodeBlock" />
    </template>
    <template v-if="tabs[2].id === activeTabId">
      <CodeBlock
        path="src/components/originalStore/Counter.vue"
        :code="counterCodeBlock"
        langage="markup"
      />
      <CodeBlock
        class="mt-3"
        path="src/components/originalStore/IncrementButton.vue"
        :code="incrementButtonCodeBlock"
        langage="markup"
      />
      <CodeBlock
        class="mt-3"
        path="src/components/originalStore/IncrementButton.vue"
        :code="decrementButtonCodeBlock"
        langage="markup"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardLayout from "@/components/common/CardLayout.vue";
import Counter from "@/components/originalStore/Counter.vue";
import IncrementButton from "@/components/originalStore/IncrementButton.vue";
import DecrementButton from "@/components/originalStore/DecrementButton.vue";
import CodeBlock from "@/components/common/CodeBlock.vue";
import Tabs from "@/components/common/Tabs.vue";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import storeCodeBlock from "!!raw-loader!../stores/originalStore/store.ts";
import counterCodeBlock from "!!raw-loader!../components/originalStore/Counter.vue";
import incrementButtonCodeBlock from "!!raw-loader!../components/originalStore/IncrementButton.vue";
import decrementButtonCodeBlock from "!!raw-loader!../components/originalStore/DecrementButton.vue";
import { useCodeBlockTabs } from "@/composables/useCodeBlockTabs";

const installCodeBlock = `
import { createApp, provide } from "vue";
import App from "./App.vue";
import { STORE_KEY, createStore } from "@/stores/originalStore/store";
const app = createApp(App);

// Original Store
app.provide(STORE_KEY, createStore());

app.mount("#app");
`;

export default defineComponent({
  name: "OriginalStore",
  components: {
    CodeBlock,
    DecrementButton,
    IncrementButton,
    CardLayout,
    Counter,
    Tabs
  },
  setup() {
    const { tabs, onSelected, activeTabId } = useCodeBlockTabs();
    return {
      tabs,
      activeTabId,
      onSelected,
      counterCodeBlock,
      storeCodeBlock,
      incrementButtonCodeBlock,
      decrementButtonCodeBlock,
      installCodeBlock
    };
  }
});
</script>
