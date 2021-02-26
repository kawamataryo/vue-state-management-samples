<template>
  <div>
    <h1 class="title is-4 mt-5">
      State management with
      <a href="https://v4.apollo.vuejs.org" target="_blank">Apollo Client</a>
    </h1>
    <CardLayout>
      <Counter />
      <div class="buttons is-centered mt-4">
        <IncrementButton />
        <DecrementButton />
      </div>
    </CardLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardLayout from "@/components/common/CardLayout.vue";
import Counter from "@/components/apolloClient/Counter.vue";
import IncrementButton from "@/components/apolloClient/IncrementButton.vue";
import DecrementButton from "@/components/apolloClient/DecrementButton.vue";

export default defineComponent({
  name: "Pinia",
  components: {
    DecrementButton,
    IncrementButton,
    CardLayout,
    Counter
  }
});
</script>
