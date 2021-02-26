<template>
  <div>
    <p class="title is-1">{{ count }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { key } from "@/stores/vuex/store";

export default defineComponent({
  name: "Counter",
  setup() {
    const store = useStore(key);
    const count = computed(() => store.state.count);

    return {
      count
    };
  }
});
</script>
