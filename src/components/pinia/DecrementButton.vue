<template>
  <button class="bu-button is-danger" @click="decrement">-</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "@/stores/pinia/store";

export default defineComponent({
  name: "DecrementButton",
  setup() {
    const store = useCounterStore();
    const decrement = () => store.decrement();

    return {
      decrement
    };
  }
});
</script>
