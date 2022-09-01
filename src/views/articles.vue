<template>
  <el-container>
    <el-header class="header">
      <Header :header="header ? header : null"></Header>
    </el-header>
    <el-main class="main">
      <ArticlesComp :articles="cls.abstracts ? cls.abstracts : []"></ArticlesComp>
    </el-main>
    <el-footer class="footer">
      <div>{{$route.query.name}}</div>
      <div>{{$route.query.description}}</div>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue"
import axios from "axios"

import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
import ArticlesComp from "../components/articles.vue"

import { Articles }from "../entity/Article";
import Base from "../entity/Base"

let cls = ref(new Articles());
let header = ref(new Base())
axios.get("./data/articles.json").then((res) => {
  cls.value = res.data;
  header.value.set_name(res.data.name);
  header.value.set_description(res.data.description);
});

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