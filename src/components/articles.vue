<template>
    <div v-for="article in articles" class="abstract">
        <img class="top" :src="`https://localhost:8080/blog/api/v1/images?name=${article.id}-0.jpg`"/>
        <div class="bottom">
            <router-link :to="{ path: '/articles/' + article.id }" class="title"> {{ article.name }} </router-link>
            <div class="tags">
                <router-link v-for="tag in article.tags" :to="{ path: '/articles', query: {'tag_id': tag.id}}" class="tag">
                    <el-tag class="ml-2" :type="get_random_tag_type()"> {{ tag.name }} </el-tag>
                </router-link>
            </div>
            <div class="digest"> {{ article.description ? article.description : "啊，忘了写摘要." }}</div>
            <div class="statistic">
                <span class="time">{{ article.date }}</span> 
                <span style="float: right;">阅读 ({{ article.read }}) | 拉胯 ({{ article.downvoted }}) | 点赞 ({{ article.upvoted }})</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Abstract } from '../entity/Article';

type Props = {
  articles: Array<Abstract>
}

defineProps<Props>();

const get_random_tag_type = () => {
  const tag_type_list:Array<String> = ["primary", "success", "warning", "danger"];
  const idx = Math.floor(Math.random() * 1000) % tag_type_list.length;
  return tag_type_list[idx];
};
</script>

<style scoped>
.abstract {
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0,0,0,.2);
  border-bottom: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 30px;
  opacity:0.9;
  background-size: 50%;
}
.top {
  width: 100%;
}
.bottom {
  padding: 8px 15px;
}
.title {
  font-size: 3.6vmin;
}
.tags {
  padding-top: 20px;
}
.tag {
  margin-right: 9px;
}
.digest {
  color: #666;
  font-size: 16px;
  padding: 20px 0px;
  clear: left;
}
.statistic {
  color: #333;
  padding: 20px 0px;
  font-size: 16px;
}
</style>