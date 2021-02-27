<template>
  <button class="bu-button is-info" @click="increment">+</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "@/stores/vuex/store";

export default defineComponent({
  name: "IncrementButton",
  setup() {
    const store = useStore(key);
    const increment = () => store.dispatch("increment");

    return {
      increment
    };
  }
});
</script>
