<template>
  <div>
    <p class="bu-title is-1">{{ count }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/stores/originalStore/store";

export default defineComponent({
  name: "Counter",
  setup() {
    const { state } = useStore();
    const count = computed(() => state.count.value);

    return {
      count
    };
  }
});
</script>
