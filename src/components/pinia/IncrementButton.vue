<template>
  <button class="bu-button is-info" @click="increment">+</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "@/stores/pinia/store";

export default defineComponent({
  name: "IncrementButton",
  setup() {
    const store = useCounterStore();
    const increment = () => store.increment();

    return {
      increment
    };
  }
});
</script>
