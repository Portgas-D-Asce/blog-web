<template>
  <el-container>
    <el-header class="header">
      <Header :header="header"></Header>
    </el-header>
    <el-main class="main">
      <ArticlesComp :articles="abstracts"></ArticlesComp>
    </el-main>
    <el-footer class="footer">
      <Footer></Footer>
    </el-footer>
  </el-container>
  <Tool></Tool>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"

import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
import ArticlesComp from "../components/articles.vue"

import { Abstract }from "../entity/Article";
import Tool from '../components/tool.vue'
import { get } from "../api"
import Base from "../entity/Base"

const route = useRoute();
let header = ref(new Base());
let abstracts = ref(new Array<Abstract>());

let path = undefined
if(route.query.category_id != undefined) {
  path = "/categories/" + route.query.category_id;
} else {
  path = "/tags/" + route.query.tag_id;
}
get(path, {"recursion": "false"}).then((res) => {
  header.value = res.data;
});

get(route.fullPath).then((res) => {
  abstracts.value = res.data;
});
</script>
<style scoped>
.main {
  min-height: 80vmin;
}
.header {
  height: 61.8vh;
  padding-top: 26vh;
  background-size: cover;
  background: url("../assets/image/articles.jpg") no-repeat right top;
  background-size: 100vw;
}
.footer {
  height: 100px;
  padding: 15px 0px 5px 0px;
  background-color: #ccc;
  text-align: center;
}
</style>