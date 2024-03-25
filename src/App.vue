<template>
    <router-view :key="route_key()"></router-view>
    <div id="music">
        <meting-js server="tencent" type="playlist" id="7679023489" order="random" volume="0.2"></meting-js>
    </div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const route_key = () => {
    const path = route.fullPath;
    const idx = path.indexOf("#");
    if(idx == -1) return path;
    return path.substring(0, idx);
}

const router = useRouter();
onMounted(() => {
    document.onkeyup = (e) => {
        if(e.code === 'KeyH') {
            router.push({path: "/"});
        } else if(e.code === 'KeyC') {
            router.push({path: "/categories"});
        } else if(e.code === 'KeyT') {
            router.push({path: "/tags"});
        } else if(e.code === 'KeyP') {
            router.back();
        } else if(e.code === 'KeyN') {
            router.forward();
        } else if(e.code === 'KeyA') {
            window.scrollTo({top: 0, behavior: 'smooth'});
        } else if(e.code === 'KeyV') {
            window.scrollTo({top: document.body.scrollHeight , behavior: 'smooth'});
        } else if(e.code === 'KeyM') {
            const music = document.querySelector(".aplayer-pic") as HTMLElement;
            music.click();
        }
    };

});
</script>


<style>
html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}

img {
    width: 100%;
}

a {
    text-decoration: none;
    cursor: pointer;
    color: black;
}

a:hover {
    color: #2d9ebd;
    transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, opacity 0.2s ease
}

.hljs {
    line-height: 1.8em;
    font-family: Consolas, Monaco, monospace;
    tab-size: 4;
    background-color: rgb(250, 250, 250);
    font-size: 13px;
}

#music {
    display: none;
}

#blog-header {
    height: 61.8vh;
    padding-top: 26vh;
    background-size: 100vw;
}

#blog-footer {
    z-index: 998;
    height: 150px;
    padding: 42px 0px 5px 0px;
    background-color: #eee;
    text-align: center;
}

.wh100 {
    width: 100vw;
    height: 100vh;
}

.fontsz36 {
    font-size: 36px !important;
}

.fontsz28 {
    font-size: 28px !important;
}

.fontsz24 {
    font-size: 24px !important;
}

.fontsz20 {
    font-size: 20px !important;
}

.fontsz16 {
    font-size: 16px !important;
}

.color-white {
    color: white;
}

.font-bold {
    font-weight: bold;
}
</style>
