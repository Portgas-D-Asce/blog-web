<template>
  <el-container>
    <el-header class="header">
      <Header :header="header ? header : null"></Header>
    </el-header>
    <el-main class="main">
      <ArticlesComp :articles="abstracts ? abstracts : []"></ArticlesComp>
    </el-main>
    <el-footer class="footer">
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"

import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
import ArticlesComp from "../components/articles.vue"

import { Abstract }from "../entity/Article";
import { get_category, get_category_abstract } from "../api"
import Base from "../entity/Base"

const route = useRoute();

let header = ref(new Base());
get_category({id: route.query.id}).then((res) => {
  header.value = res.data;
});

let abstracts = ref(new Array<Abstract>());
get_category_abstract({id: route.query.id}).then((res) => {
  abstracts.value = res.data;
})

</script>
<style scoped>
.main {
  padding: 20px 12% 15px 12%;
  min-height: 80vmin;
  overflow: auto;
}
.header {
  height: 61.8vh;
  padding-left: 12%;
  padding-top: 26vh;
  background-size: cover;
  background: url("../assets/image/articles.jpg") no-repeat right top;
}
.footer {
  height: 100px;
  padding: 15px 0px 5px 0px;
  background-color: #ccc;
  text-align: center;
}
</style>