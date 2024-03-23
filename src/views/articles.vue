<template>
    <el-container>
        <el-header id="blog-header" class="blog-header color-white">
            <Header :header="header"></Header>
        </el-header>

        <ArticlesComp :articles="abstracts"></ArticlesComp>

        <el-footer id="blog-footer">
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
import { get } from "../api"
import Base from "../entity/Base"

const route = useRoute();
let header = ref(new Base());
let abstracts = ref(new Array<Abstract>());

// 这是在请求 header 部分数据呢
let path = undefined
if(route.query.category != undefined) {
    path = "/categories/" + route.query.category;
} else {
    path = "/tags/" + route.query.tag;
}
get(path).then((res) => {
    header.value = res.data;
});

// 请求摘要数据
get(route.fullPath, {"recursively": "true"}).then((res) => {
    abstracts.value = res.data;
});
</script>


<style scoped>
.blog-header {
    background: url("../assets/image/articles.jpg") no-repeat right top;
}
</style>
