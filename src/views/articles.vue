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
get(path).then((res) => {
    header.value = res.data;
});

get(route.fullPath, {"recursively": "true"}).then((res) => {
    abstracts.value = res.data;
});
</script>


<style scoped>
.blog-header {
    background: url("../assets/image/articles.jpg") no-repeat right top;
}
</style>
