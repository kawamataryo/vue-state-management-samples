<template>
  <button class="bu-button is-danger" @click="decrement">-</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/stores/originalStore/store";

export default defineComponent({
  name: "DecrementButton",
  setup() {
    const { actions } = useStore();
    const decrement = () => actions.decrement();

    return {
      decrement
    };
  }
});
</script>
