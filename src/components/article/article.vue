<template>
  <div v-html="article.content"></div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'

import { ref, computed } from 'vue'

class Article {
  public id: number;
  public name: string;
  public description: string;
  public content: string;
}

let md = new MarkdownIt({
  breaks: true,
  html: true,
  linkify: true,
  typographer: true
});
let article = ref(new Article());

import server from '../../server'

server.get('/api/article').then((res) => {
  article.value = res.data;
  article.value.content = md.render(article.value.content);
  console.log(article.value)
});

</script>

<style scoped>
</style>
