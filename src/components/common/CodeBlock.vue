<template>
  <p>{{ path }}</p>
  <code-highlight :language="langage" class="my-code-block">
    <pre>{{ code }}</pre>
  </code-highlight>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/prism-okaidia.css";
import "vue-code-highlight/themes/window.css";
import "prism-es6/components/prism-typescript";

export default defineComponent({
  name: "CodeBlock",
  props: {
    path: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    langage: {
      type: String,
      require: false,
      default: "ts"
    }
  },
  components: {
    CodeHighlight
  }
});
</script>

<style lang="scss">
.my-code-block {
  margin: 0 20px;

  @media screen and (min-width: 480px) {
    pre {
      width: 650px;
    }
  }
  @media screen and (max-width: 480px) {
    pre {
      max-width: 100% !important;
    }
  }
}
</style>
