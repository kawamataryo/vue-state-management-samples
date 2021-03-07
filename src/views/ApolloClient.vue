<template>
  <div>
    <h1 class="bu-title is-4 mt-5">
      State management with
      <a href="https://v4.apollo.vuejs.org" target="_blank">ApolloClient 🚀</a>
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
        path="src/stores/apolloClient/apolloClient.ts"
        :code="apolloClientCodeBlock"
      />
      <CodeBlock
        path="src/stores/apolloClient/typeDefs.ts"
        :code="typeDefsCodeBlock"
      />
      <CodeBlock
        path="src/stores/apolloClient/resolvers.ts"
        :code="resolversCodeBlock"
      />
      <CodeBlock
        path="src/stores/apolloClient/queries.ts"
        :code="queriesCodeBlock"
      />
      <CodeBlock
        path="src/stores/apolloClient/mutations.ts"
        :code="mutationsCodeBlock"
      />
    </template>
    <template v-if="tabs[1].id === activeTabId">
      <CodeBlock
        path="src/components/apolloClient/Counter.vue"
        :code="counterCodeBlock"
        langage="markup"
      />
      <CodeBlock
        class="mt-3"
        path="src/components/apolloClient/IncrementButton.vue"
        :code="incrementButtonCodeBlock"
        langage="markup"
      />
      <CodeBlock
        class="mt-3"
        path="src/components/apolloClient/IncrementButton.vue"
        :code="decrementButtonCodeBlock"
        langage="markup"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardLayout from "@/components/common/CardLayout.vue";
import Counter from "@/components/apolloClient/Counter.vue";
import IncrementButton from "@/components/apolloClient/IncrementButton.vue";
import DecrementButton from "@/components/apolloClient/DecrementButton.vue";
import CodeBlock from "@/components/common/CodeBlock.vue";
import Tabs from "@/components/common/Tabs.vue";

/* eslint-disable */
// @ts-ignore
import apolloClientCodeBlock from "!!raw-loader!../stores/apolloClient/apolloClient.ts";
// @ts-ignore
import mutationsCodeBlock from "!!raw-loader!../stores/apolloClient/mutations.ts";
// @ts-ignore
import queriesCodeBlock from "!!raw-loader!../stores/apolloClient/queries.ts";
// @ts-ignore
import resolversCodeBlock from "!!raw-loader!../stores/apolloClient/resolvers.ts";
// @ts-ignore
import typeDefsCodeBlock from "!!raw-loader!../stores/apolloClient/typeDefs.ts";
/* eslint-enable */

import counterCodeBlock from "!!raw-loader!../components/apolloClient/Counter.vue";
import incrementButtonCodeBlock from "!!raw-loader!../components/apolloClient/IncrementButton.vue";
import decrementButtonCodeBlock from "!!raw-loader!../components/apolloClient/DecrementButton.vue";
import { useCodeBlockTabs } from "@/composables/useCodeBlockTabs";

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
      apolloClientCodeBlock,
      mutationsCodeBlock,
      queriesCodeBlock,
      typeDefsCodeBlock,
      resolversCodeBlock,
      incrementButtonCodeBlock,
      decrementButtonCodeBlock
    };
  }
});
</script>
