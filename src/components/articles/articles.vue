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
      {{ article.time.toDateString() }} 
      <span style="float:right;">阅读 (1) | 评论 (1) | 点赞 (1)</span>
    </div>
  </div>
</template>

<script setup lang="ts">
class TagInfo {
  public id: number;
  public name: string;
  public description: string;
  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

class ArticleInfo {
  public id: number;
  public name: string;
  public description: string;
  public tags: Array<TagInfo>;
  public time: Date;
  constructor(id: number, name: string, description: string, tags: Array<TagInfo>) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.tags = tags;
    this.time = new Date();
  }
}
let tags = Array<TagInfo>();
for(let i = 0; i < 5; ++i) {
  let tag = new TagInfo(i, "标签" + i, "标签" + i);
  tags.push(tag);
}

let articles = Array<ArticleInfo>();
for(let i = 0; i < 10; ++i) {
  let article = new ArticleInfo(i, "须知少时凌云志，曾许人间第一流: " + i, "test", tags);
  articles.push(article);
}
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