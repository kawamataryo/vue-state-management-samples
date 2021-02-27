<template>
  <div class="bu-container has-text-centered">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
      style="max-width: 130px"
      class="mt-5"
    />
    <NavButtons />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import NavButtons from "@/components/common/NavButtons.vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "@/stores/apolloClient/apolloClient";
import { initializeStore } from "@/stores/originalStore/store";

export default defineComponent({
  name: "App",
  components: {
    NavButtons
  },
  setup() {
    // ApolloClient
    provide(DefaultApolloClient, apolloClient);

    // Original store
    initializeStore();
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
