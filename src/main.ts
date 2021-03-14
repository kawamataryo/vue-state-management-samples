import { createApp, h, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import "bulma";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "@/stores/apolloClient/apolloClient";
import { initializeStore } from "@/stores/originalStore/store";
import VueCodeHighlight from "vue-code-highlight";
import { store, key } from "./stores/vuex/store";
import { createPinia } from "pinia";

const app = createApp({
  setup() {
    // ApolloClient
    provide(DefaultApolloClient, apolloClient);

    // Original store
    initializeStore();

    return () => h(App);
  }
});

// code-highlight
app.use(VueCodeHighlight);

// vuex
app.use(store, key);

// pinia
app.use(createPinia());

app.use(router);
app.mount("#app");
