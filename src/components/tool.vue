<template>
  <div id="tools" class="tools">
    <div class="tool"><a class="iconfont icon-zhiding" href="#top"></a></div>
    <div class="tool"><router-link to="/category" class="iconfont icon-sort" href="/category"></router-link></div>
    <div class="tool"><router-link to="/tag" class="iconfont icon-tag" href="/tag"></router-link></div>
    <div class="tool"><b><a class="iconfont icon-zan"></a></b></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.tools {
    position: fixed;
    z-index: 999;
    bottom: 20px;
    right: 25px;
}
.tool {
    margin-bottom: 10px;
}
</style>