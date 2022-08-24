<template>
  <div class="header">
    <Header></Header>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/header.vue"
</script>

<style scoped>
.header {
  width: 100vw;
  height: 61.8vh;
  padding-left: 12%;
  padding-top: 26vh;
  background-size: cover;
  background: url("../assets/image/page.jpg") no-repeat right top;
}
</style>