<template>
  <keep-alive>
    <router-view :key="route.fullPath"></router-view>
  </keep-alive>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #2ce469;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, opacity 0.2s ease
}

a:hover {
  color: #2d9ebd;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, opacity 0.2s ease
}

</style>