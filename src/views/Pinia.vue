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
    <Tabs
      class="mt-5"
      :tabs="tabs"
      :active-tab-id="activeTabId"
      @selected="onSelected"
    />
    <template v-if="tabs[0].id === activeTabId">
      <CodeBlock path="src/stores/pinia/store.ts" :code="storeCodeBlock" />
    </template>
    <template v-if="tabs[1].id === activeTabId">
      <CodeBlock
          path="src/main.ts"
          :code="installCodeBlock"
      />
    </template>
    <template v-if="tabs[2].id === activeTabId">
      <CodeBlock
        path="src/components/pinia/Counter.vue"
        :code="counterCodeBlock"
        langage="markup"
      />
      <CodeBlock
        class="mt-3"
        path="src/components/pinia/IncrementButton.vue"
        :code="incrementButtonCodeBlock"
        langage="markup"
      />
      <CodeBlock
        class="mt-3"
        path="src/components/pinia/IncrementButton.vue"
        :code="decrementButtonCodeBlock"
        langage="markup"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardLayout from "@/components/common/CardLayout.vue";
import Counter from "@/components/pinia/Counter.vue";
import IncrementButton from "@/components/pinia/IncrementButton.vue";
import DecrementButton from "@/components/pinia/DecrementButton.vue";
import CodeBlock from "@/components/common/CodeBlock.vue";
import Tabs from "@/components/common/Tabs.vue";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import storeCodeBlock from "!!raw-loader!../stores/pinia/store.ts";
import counterCodeBlock from "!!raw-loader!../components/pinia/Counter.vue";
import incrementButtonCodeBlock from "!!raw-loader!../components/pinia/IncrementButton.vue";
import decrementButtonCodeBlock from "!!raw-loader!../components/pinia/DecrementButton.vue";
import { useCodeBlockTabs } from "@/composables/useCodeBlockTabs";

const installCodeBlock = `
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

const app = createApp(App);

// pinia
app.use(createPinia());

app.mount("#app");
`

export default defineComponent({
  name: "Pinia",
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
