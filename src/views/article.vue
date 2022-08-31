<template>
  <el-container>
    <el-header class="header">
      <Header></Header>
    </el-header>
    <el-container class="main">
      <el-main>
        <Copyright></Copyright>
        <Article></Article>
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
import Header from "../components/header.vue"
import Copyright from "../components/copyright.vue"
import Article from "../components/article.vue"
import Music from '../components/music.vue'
import Footer from "../components/footer.vue"
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