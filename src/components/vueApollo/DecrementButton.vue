<template>
  <button class="bu-button is-danger" @click="decrement">-</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMutation } from "@vue/apollo-composable";
import { DECREMENT_MUTATION } from "@/stores/vueApollo/mutations";

export default defineComponent({
  name: "DecrementButton",
  setup() {
    const { mutate: decrement } = useMutation(DECREMENT_MUTATION);

    return {
      decrement
    };
  }
});
</script>
