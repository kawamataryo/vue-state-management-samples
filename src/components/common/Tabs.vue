<template>
  <div class="bu-tabs is-centered is-boxed is-medium">
    <ul>
      <template v-for="tab in tabs" :key="tab.id">
        <li :class="{ 'is-active': tab.id === activeTabId }">
          <a @click="onSelected(tab.id)">
            <span>{{ tab.name }}</span>
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

type Tab = {
  id: number;
  name: string;
};

export default defineComponent({
  props: {
    tabs: {
      type: Array
    },
    activeTabId: {
      type: Number
    }
  },
  setup(_, context) {
    const onSelected = (id: number) => {
      context.emit("selected", id);
    };
    return {
      onSelected
    };
  }
});
</script>

<style scoped lang="scss"></style>
