<template>
  <el-container>
    <el-header class="header">
      <Header></Header>
    </el-header>
    <el-main class="main">
      <Articles :articles="cls.articles"></Articles>
    </el-main>
    <el-footer class="footer">
      <div>{{$route.query.name}}</div>
      <div>{{$route.query.description}}</div>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import axios from "axios"
import { ref } from "vue"
import Header from "../components/header.vue"
import Footer from "../components/footer.vue"
import Articles from "../components/articles.vue"
import ClassArticles from "../entity/ClassArticles";

let cls = ref(new ClassArticles())
axios.get("./data/carticles.json").then((res) => {
  cls.value = res.data;
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