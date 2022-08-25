<template>
  <div v-for="article in articles" class="abstract">
    <router-link :to="{ path: '/article', query: { id: article.id, name: article.name }}" class="title"> {{ article.name }} </router-link>
    <div class="tags">
      <router-link v-for="tag in article.tags" to="/tags">
        <el-tag class="ml-2" type="success"> {{ tag.name }} </el-tag>
      </router-link>
    </div>
    <div class="digest">啊，忘了写摘要</div>
    <div class="statistic">
      {{ article.time }} 
      <span style="float:right;">阅读 (1) | 评论 (1) | 点赞 (1)</span>
    </div>
  </div>
</template>

<script setup lang="ts">
class TagInfo {
  public id: number;
  public name: string;
  public description: string;
}

class ArticleInfo {
  public id: number;
  public name: string;
  public description: string;
  public tags: Array<TagInfo>;
  public time: string;
}

import { ref } from 'vue'
let articles = ref(Array<ArticleInfo>());

import server from '../../server';

server.get('/api/articles').then((res) => {
  articles.value = res.data;  
});

</script>

<style scoped>
.abstract {
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0,0,0,.2);
  padding: 8px 15px;
  border-bottom: 1px solid #eee;
  
  border-radius: 5px;
  margin-bottom: 15px;
  opacity:0.9;
}

.title {
  color: black;
  font-weight: bold;
  font-size: 3vmin;
}

.title:hover {
  color: #2d96bd;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, opacity 0.2s ease;
}
  
.tags {
  padding-top: 1vmin;
}

.digest {
  color: #666;
  font-size: 1.6vmin;
  padding: 7px 0px;
  clear: left;
}

.statistic {
  color: #333;
  font-size: 1.6vmin;
}
</style>