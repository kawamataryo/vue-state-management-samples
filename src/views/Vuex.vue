<template>
  <div>
    <h1 class="title is-4 mt-5">
      State management with
      <a href="https://github.com/vuejs/vuex" target="_blank">Vuex4 🔋</a>
    </h1>
    <CardLayout>
      <Counter />
      <div class="buttons is-centered mt-4">
        <IncrementButton />
        <DecrementButton />
      </div>
    </CardLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardLayout from "@/components/common/CardLayout.vue";
import Counter from "@/components/vuex/Counter.vue";
import IncrementButton from "@/components/vuex/IncrementButton.vue";
import DecrementButton from "@/components/vuex/DecrementButton.vue";

export default defineComponent({
  name: "Vuex",
  components: {
    DecrementButton,
    IncrementButton,
    CardLayout,
    Counter
  }
});
</script>
