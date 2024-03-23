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
        <el-row>
            <el-col :xs="1" :sm="1" :md="1" :lg="2" :xl="3"></el-col>
            <el-col :xs="22" :sm="22" :md="22" :lg="20" :xl="18">
                <el-row>
                    <el-col :span="24">
                        <Copyright></Copyright>
                    </el-col>
                </el-row>

                <el-row class="blog-article">
                    <el-col :xs="24" :sm="24" :md="16" :lg="18" :xl="18">
                        <ArticleComp :content="content"></ArticleComp>
                    </el-col>
        
                    <el-col :xs="0" :sm="0" :md="8" :lg="6" :xl="6" id="aside-container" class="aside-container">
                        <el-affix target=".aside-container">
                            <div class="aside-content">
                                <TocComp class="aside-comp"></TocComp>
                                <Music class="aside-comp"></Music>
                            </div>
                        </el-affix>
                    </el-col>
        
                    
        
                </el-row>
                
                <el-row>
                    <el-col :span="24">
                        <Comment></Comment>
                    </el-col>
                </el-row>
            </el-col>

            <el-col :xs="1" :sm="1" :md="1" :lg="2" :xl="3"></el-col>
        </el-row>

        <el-footer id="blog-footer">
            <Footer></Footer>
        </el-footer>
    </el-container>
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
import Footer from "../components/footer.vue"
import Comment from "../components/Comment.vue"

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

get(route.path, {'withContent': 'true'}).then((res) => {
    header.value.id = res.data.id;
    header.value.set_name(res.data.name)
    header.value.set_description(res.data.description)
    content.value = md.render(Base64.decode(res.data.content));
    
    //update title
    window.document.title = header.value.name;

    //init comment
    const comment = document.getElementById("giscus");
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://giscus.app/client.js';
    s.setAttribute("data-repo", "Portgas-D-Asce/blog-web");
    s.setAttribute("data-repo-id", "R_kgDOJCta4g");
    s.setAttribute("data-category-id", "DIC_kwDOJCta4s4CbvLE");
    s.setAttribute("data-mapping", "title");
    s.setAttribute("data-strict", "1");
    s.setAttribute("data-reactions-enabled", "1");
    s.setAttribute("data-emit-metadata", "0");
    s.setAttribute("data-input-position", "top");
    s.setAttribute("data-theme", "light");
    s.setAttribute("data-lang", "zh-CN");
    s.setAttribute("data-loading", "lazy");
    s.setAttribute("crossorigin", "anonymous");
    //s.async = true;
    comment.appendChild(s);
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
}

.aside-content::-webkit-scrollbar {
    width: 0 !important
}

.aside-content {
    padding-left: 10px;
    max-height: 99vh;
    overflow: auto;
}
</style>
