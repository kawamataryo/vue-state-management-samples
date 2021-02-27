<template>
  <div>
    <p class="bu-title is-1">{{ count }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useCounterStore } from "@/stores/pinia/store";

export default defineComponent({
  name: "Counter",
  setup() {
    const store = useCounterStore();
    const count = computed(() => store.count);

    return {
      count
    };
  }
});
</script>
