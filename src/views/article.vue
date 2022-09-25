<template>
  <el-container>
    <el-header class="header">
      <Header :header="header ? header : null"></Header>
    </el-header>
    <el-container class="main">
      <el-main>
        <Copyright></Copyright>
        <ArticleComp :content="content ? content : ''"></ArticleComp>
      </el-main> 
      <el-aside>
        <Music></Music>
      </el-aside>
    </el-container>
    <el-footer class="footer">
      <Footer></Footer>
    </el-footer> 
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"
import MarkdownIt from 'markdown-it'

import Header from "../components/header.vue"
import Copyright from "../components/copyright.vue"
import ArticleComp from "../components/article.vue"
import Music from '../components/music.vue'
import Footer from "../components/footer.vue"

import Base from "../entity/Base"
import { get_article, get_article_content } from "../api"


const route = useRoute();

let header = ref(new Base());
get_article({id: route.query.id}).then((res) => {
  header.value = res.data;
});

let md = new MarkdownIt({
  breaks: true,
  html: true,
  linkify: true,
  typographer: true
});
let content = ref("");
get_article_content({id: route.query.id}).then((res) => {
  content.value = md.render(res.data);
});
</script>

<style scoped>
.main {
  padding: 20px 12% 0px 12%;
  min-height: 80vmin;
  overflow: auto;
}
.header {
  height: 61.8vh;
  padding-left: 12%;
  padding-top: 26vh;
  background: url("../assets/image/article.jpg") no-repeat top;
  background-size: 100vw;
}
.footer {
  height: 100px;
  padding: 15px 0px 5px 0px;
  background-color: #ccc;
  text-align: center;
}
</style>