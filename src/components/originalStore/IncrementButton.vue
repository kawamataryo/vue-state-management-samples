<template>
  <button class="bu-button is-info" @click="increment">+</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/stores/originalStore/store";

export default defineComponent({
  name: "IncrementButton",
  setup() {
    const { actions } = useStore();
    const increment = () => actions.increment();

    return {
      increment
    };
  }
});
</script>
