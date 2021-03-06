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
      <CodeBlock path="src/main.ts" :code="installCodeBlock" />
    </template>
    <template v-if="tabs[2].id === activeTabId">
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
import { defineComponent } from "vue";
import CardLayout from "@/components/common/CardLayout.vue";
import Counter from "@/components/vuex/Counter.vue";
import IncrementButton from "@/components/vuex/IncrementButton.vue";
import DecrementButton from "@/components/vuex/DecrementButton.vue";
import CodeBlock from "@/components/common/CodeBlock.vue";
import Tabs from "@/components/common/Tabs.vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import storeCodeBlock from "!!raw-loader!../stores/vuex/store.ts";
import counterCodeBlock from "!!raw-loader!../components/vuex/Counter.vue";
import incrementButtonCodeBlock from "!!raw-loader!../components/vuex/IncrementButton.vue";
import decrementButtonCodeBlock from "!!raw-loader!../components/vuex/DecrementButton.vue";
import { useCodeBlockTabs } from "@/composables/useCodeBlockTabs";

const installCodeBlock = `
import { createApp } from "vue";
import App from "./App.vue";
import { store, key } from "./stores/vuex/store";

const app = createApp(App);

// vuex
app.use(store, key);

app.mount("#app");
`;

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
    const { tabs, onSelected, activeTabId } = useCodeBlockTabs();
    return {
      onSelected,
      activeTabId,
      tabs,
      counterCodeBlock,
      storeCodeBlock,
      incrementButtonCodeBlock,
      decrementButtonCodeBlock,
      installCodeBlock
    };
  }
});
</script>
