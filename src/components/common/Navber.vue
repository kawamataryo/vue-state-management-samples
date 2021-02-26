<template>
  <div class="is-flex is-justify-content-center is-flex-grow-1">
    <router-link class="navbar-item" to="/vuex">Vuex</router-link>
    <router-link class="navbar-item" to="/original-store"
      >Original Store</router-link
    >
    <router-link class="navbar-item" to="/pinia">Pinia</router-link>
    <router-link class="navbar-item" to="/apollo-client"
      >Apollo Client</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar"
});
</script>
