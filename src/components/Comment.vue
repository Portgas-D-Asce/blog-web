<template>
    <div id="giscus"></div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    const comment = document.getElementById("giscus");
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://giscus.app/client.js';
    s.setAttribute("data-repo", "Portgas-D-Asce/blog-web");
    s.setAttribute("data-repo-id", "R_kgDOJCta4g");
    s.setAttribute("data-category-id", "DIC_kwDOJCta4s4CbvLE");
    s.setAttribute("data-mapping", "title");
    s.setAttribute("data-strict", "0");
    s.setAttribute("data-reactions-enabled", "1");
    s.setAttribute("data-emit-metadata", "0");
    s.setAttribute("data-input-position", "top");
    s.setAttribute("data-theme", "light");
    s.setAttribute("data-lang", "zh-CN");
    //s.setAttribute("data-loading", "lazy");
    s.setAttribute("crossorigin", "anonymous");
    s.async = true;
    comment.appendChild(s);
});
</script>


<style>
.giscus {
    padding: 20px 0;
}
</style>