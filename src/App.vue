<template>
  <router-view :key="route_key()"></router-view>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const route_key = () => {
  const path = route.fullPath;
  const idx = path.indexOf("#");
  if(idx == -1) return path;
  console.log(path.substring(0, idx));
  return path.substring(0, idx);
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

h1 {
  font-size: 28px !important;
  font-weight: bold;
}

h2, h3, h4, h5, h6 {
  margin: 20px 0 10px;
  margin: 0;
  padding: 0;
  font-weight: bold;
}

img {
  width: 100%;
}

#app {
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: black;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, opacity 0.2s ease
}

a:hover {
  color: #2d9ebd;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, opacity 0.2s ease
}

.hljs {
  line-height: 1.8em;
  font-family: Consolas, Monaco, monospace;
  tab-size: 4;
  background-color: rgb(250, 250, 250);
  font-size: 13px;
}
</style>