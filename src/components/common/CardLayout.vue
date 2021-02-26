<template>
  <div class="is-flex is-justify-content-center">
    <div class="card mt-5" style="min-width: 480px">
      <div class="card-content">
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
