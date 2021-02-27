<template>
  <div class="is-flex is-justify-content-center is-flex-grow-1">
    <div class="bu-buttons is-centered mt-4">
      <router-link class="bu-button bu-navbar-item" to="/vuex">Vuex 🔋</router-link>
      <router-link class="bu-button bu-navbar-item" to="/pinia">Pinia 🍍</router-link>
      <router-link class="bu-button bu-navbar-item" to="/apollo-client"
        >Apollo Client 🚀</router-link
      >
      <router-link class="bu-button bu-navbar-item" to="/original-store"
        >Original Store 📁</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar"
});
</script>
