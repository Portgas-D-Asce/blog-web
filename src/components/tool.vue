<template>
    <div id="tools" class="tools">
        <div class="tool"><a class="iconfont icon-zhiding" href="#top"></a></div>
        <div class="tool"><router-link to="/categories" class="iconfont icon-sort" href="/category"></router-link></div>
        <div class="tool"><router-link to="/tags" class="iconfont icon-tag" href="/tag"></router-link></div>
        <!--<div class="tool"><b><a class="iconfont icon-zan"></a></b></div>-->
        <div class="tool"><a class="iconfont icon-home3" href="/"></a></div>
    </div>
</template>


<style scoped>
.tools {
    position: fixed;
    z-index: 999;
    bottom: 20px;
    right: 25px;
}

.tool {
    margin-bottom: 12px;
}
</style>