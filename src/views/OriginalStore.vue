<template>
  <div>
    <h1 class="title is-4 mt-5">
      State management with Original State
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
import Counter from "@/components/originalStore/Counter.vue";
import IncrementButton from "@/components/originalStore/IncrementButton.vue";
import DecrementButton from "@/components/originalStore/DecrementButton.vue";

export default defineComponent({
  name: "Pinia",
  components: {
    DecrementButton,
    IncrementButton,
    CardLayout,
    Counter
  }
});
</script>
