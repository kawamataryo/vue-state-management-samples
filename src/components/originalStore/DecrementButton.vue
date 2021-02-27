<template>
  <button class="bu-button is-danger" @click="decrement">-</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/stores/originalStore/store";

export default defineComponent({
  name: "DecrementButton",
  setup() {
    const { mutations } = useStore();
    const decrement = () => mutations.decrement();

    return {
      decrement
    };
  }
});
</script>
