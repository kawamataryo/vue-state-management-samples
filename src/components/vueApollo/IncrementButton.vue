<template>
  <button class="bu-button is-info" @click="increment">+</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMutation } from "@vue/apollo-composable";
import { INCREMENT_MUTATION } from "@/stores/vueApollo/mutations";

export default defineComponent({
  name: "IncrementButton",
  setup() {
    const { mutate: increment } = useMutation(INCREMENT_MUTATION);

    return {
      increment
    };
  }
});
</script>
