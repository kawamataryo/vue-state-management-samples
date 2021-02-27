<template>
  <div class="is-flex is-justify-content-center">
    <div class="bu-card mt-5" style="min-width: 300px">
      <div class="bu-card-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardLayout"
});
</script>
