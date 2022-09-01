<template>
  <div v-for="article in articles" class="abstract">
    <router-link :to="{ path: '/article', query: { id: article.id }}" class="title"> {{ article.name }} </router-link>
    <div class="tags">
      <router-link v-for="tag in article.tags" to="/tags">
        <el-tag class="ml-2" type="success"> {{ tag.name }} </el-tag>
      </router-link>
    </div>
    <div class="digest"> {{ article.description }}</div>
    <div class="statistic">
      {{ article.time }} 
      <span style="float:right;">阅读 ({{ article.readed }}) | 评论 ({{ article.commoned }}) | 点赞 ({{ article.upvoted }})</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Abstract } from '../entity/Article';

type Props = {
  articles: Array<Abstract>
}

defineProps<Props>();
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