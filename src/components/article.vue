<template>
  <div v-html="content"></div>
</template>

<script setup lang="ts">
type Props = {
  content: string;
}

defineProps<Props>()
</script>

<style scoped>
</style>
