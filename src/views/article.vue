<template>
    <el-container>
        <el-header id="blog-header" class="blog-header color-white">
            <Header :header="header"></Header>
        </el-header>

        <!--
            where is el-main?
            - it is useless
            - what's worse, it conflicts with good boy el-affix
            - so remove it
        -->
        <el-row class="blog-article">
            <el-col :span="16" :offset="2" class="content">
                <Copyright></Copyright>
                <ArticleComp :content="content"></ArticleComp>
            </el-col>

            <el-col :span="5" id="aside-container" class="aside-container">
                <el-affix target=".aside-container">
                    <div class="aside-content">
                        <Music class="aside-comp"></Music>
                        <TocComp class="aside-comp"></TocComp>
                    </div>
                </el-affix>
            </el-col>
        </el-row>

        <Eof></Eof>

        <!--todo
            <el-row><el-col :span="21" :offset="2">__EOF__/pre and next</el-col></el-row>
        -->

        <!--todo
            <el-row ><el-col :span="21" :offset="2" style="height: 1000px;">comment module</el-col></el-row>
        -->
        <el-footer id="blog-footer">
            <Footer></Footer>
        </el-footer> 
    </el-container>

    <Tool></Tool>
</template>


<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"
import { Base64 } from "js-base64"
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
import Eof from '../components/eof.vue'
import Tool from '../components/tool.vue'
import Footer from "../components/footer.vue"

import Base from "../entity/Base"
import { get } from "../api"

const route = useRoute();

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

let header = ref(new Base());
let content = ref("");

get(route.path).then((res) => {
    header.value.id = res.data.id;
    header.value.set_name(res.data.name)
    header.value.set_description(res.data.description)
    content.value = md.render(Base64.decode(res.data.content));
});

Toc(md, { listType: 'ol', callback: (html, ast) => {
    let toc = document.querySelector('#toc');
    toc.innerHTML = html;
}});
</script>


<style scoped>
.blog-header {
    background: url("../assets/image/article.jpg") no-repeat top;
}

.blog-article {
    min-height: 80vmin;
    margin-top: 25px;
}

.aside-content::-webkit-scrollbar {
    width: 0 !important
}

.aside-content {
    padding-left: 10px;
    max-height: 99vh;
    overflow: auto;
}

.aside-comp {
    margin-top: 25px;
}

.content {
    border-right: 1px solid #ddd;
}
</style>
