<template>
  <div id="tools" class="tools">
    <div class="tool"><a class="iconfont icon-zhiding" href="#top"></a></div>
    <div class="tool"><a class="iconfont icon-sort" href="/category"></a></div>
    <div class="tool"><a class="iconfont icon-tag" href="/tag"></a></div>
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