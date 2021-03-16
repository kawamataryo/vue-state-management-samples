import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bulma";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "@/stores/vueApollo/apolloClient";
import { STORE_KEY, createStore } from "@/stores/originalStore/store";
import VueCodeHighlight from "vue-code-highlight";
import { store, key } from "./stores/vuex/store";
import { createPinia } from "pinia";

const app = createApp(App);

// code-highlight
app.use(VueCodeHighlight);

// vue-apollo
app.provide(DefaultApolloClient, apolloClient);

// Original Store
app.provide(STORE_KEY, createStore());

// vuex
app.use(store, key);

// pinia
app.use(createPinia());

app.use(router);
app.mount("#app");
