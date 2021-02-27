<template>
  <button class="bu-button is-danger" @click="decrement">-</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "@/stores/vuex/store";

export default defineComponent({
  name: "DecrementButton",
  setup() {
    const store = useStore(key);
    const decrement = () => store.dispatch("decrement");

    return {
      decrement
    };
  }
});
</script>
