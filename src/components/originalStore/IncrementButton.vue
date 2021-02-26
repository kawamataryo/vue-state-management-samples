<template>
  <button class="button is-info" @click="increment">+</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/stores/originalStore/store";

export default defineComponent({
  name: "IncrementButton",
  setup() {
    const { mutations } = useStore();
    const increment = () => mutations.increment();

    return {
      increment
    };
  }
});
</script>
