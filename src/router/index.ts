import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "vuex" */ "../views/Vuex.vue")
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: () => import(/* webpackChunkName: "vuex" */ "../views/Vuex.vue")
  },
  {
    path: "/pinia",
    name: "Pinia",
    component: () =>
      import(/* webpackChunkName: "pinia" */ "../views/Pinia.vue")
  },
  {
    path: "/original-store",
    name: "OriginalStore",
    component: () =>
      import(
        /* webpackChunkName: "original-state" */ "../views/OriginalStore.vue"
      )
  },
  {
    path: "/apollo-client",
    name: "ApolloClient",
    component: () =>
      import(
        /* webpackChunkName: "apollo-client" */ "../views/ApolloClient.vue"
      )
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
