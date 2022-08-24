<template>
  <div v-html="to_html"></div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'

import { ref, computed } from 'vue'
let md = new MarkdownIt();
let markdown = ref(`
  # Hello World
  - 1
  - 2
  > 3333


## params
`
);
let to_html = computed(() => {
     return md.render(markdown.value);
 }); 
 

</script>

<style scoped>
</style>
