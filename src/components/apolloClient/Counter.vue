<template>
  <div>
    <p class="title is-1">{{ count }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import { COUNT_QUERY } from "@/stores/apolloClient/queries";

export default defineComponent({
  name: "Counter",
  setup() {
    const { result } = useQuery(COUNT_QUERY);
    const count = useResult(result, 0, data => data.store.count);

    return {
      count
    };
  }
});
</script>
