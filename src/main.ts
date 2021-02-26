import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bulma";

const app = createApp(App);

// vuex
import { store, key } from "./stores/vuex/store";
app.use(store, key);

// pinia
import { createPinia } from "pinia";
app.use(createPinia());

app.use(router);
app.mount("#app");