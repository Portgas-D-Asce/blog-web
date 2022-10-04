<template>
  <el-container>
    <el-header id="header" class="header">
      <Header :header="header"></Header>
    </el-header>
    <el-container class="main">
      <el-main>
        <Copyright></Copyright>
        <ArticleComp :content="content"></ArticleComp>
      </el-main> 
      <el-aside class="aside">
        <div id="aside-container" class="aside-container">
          <TocComp class="aside-comp"></TocComp>
          <Music class="aside-comp"></Music>
        </div>
      </el-aside>
    </el-container>
    <el-footer id="footer" class="footer">
      <Footer></Footer>
    </el-footer> 
    <Tool></Tool>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"
import MarkdownIt from 'markdown-it'
import HighLight from 'markdown-it-highlightjs'
import Emoji from 'markdown-it-emoji'
import Katex from '@traptitech/markdown-it-katex'
import Anchor from 'markdown-it-anchor'
import Toc from 'markdown-it-toc-done-right'

import Header from "../components/header.vue"
import Copyright from "../components/copyright.vue"
import ArticleComp from "../components/article.vue"
import Music from '../components/music.vue'
import TocComp from '../components/toc.vue'
import Tool from '../components/tool.vue'
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
HighLight(md, {});
Emoji(md, {});
Katex(md, {});
Anchor(md, { } );
let content = ref("");
get_article_content({id: route.query.id}).then((res) => {
  content.value = md.render(res.data);
});

Toc(md, { listType: 'ol', callback: (html, ast) => {
  let toc = document.querySelector('#toc');
  toc.innerHTML = html;
}});

window.addEventListener('scroll', (ev) =>{
  let header = document.querySelector('#header');
  let temp = document.querySelector('#aside-container') as HTMLDivElement;
  if(window.scrollY < header.clientHeight) {
    temp.classList.remove('aside-fix');
    return;
  }
  temp.classList.add('aside-fix');
});
</script>

<style scoped>
.aside-fix {
  position: fixed;
  top: 0px;
  width: 289px;
}
.aside-container::-webkit-scrollbar { width: 0 !important }
.aside-container {
  height: 100vh;
  overflow-y: auto;
  overflow-x: auto;
  border-left: 1px solid #ccc;
  padding-left: 10px;
}
.aside-comp {
    margin-top: 25px;
}
.main {
  padding: 20px 6% 0px 8%;
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
  z-index: 998;
  height: 100px;
  padding: 15px 0px 5px 0px;
  background-color: #ccc;
  text-align: center;
}
</style>