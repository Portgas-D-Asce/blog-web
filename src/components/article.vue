<template>
  <div v-html="article"></div>
</template>

<script setup lang="ts">
type Props = {
  article: string;
}

defineProps<Props>()
</script>

<style scoped>
</style>
