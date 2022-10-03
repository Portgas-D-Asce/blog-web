<template>
  <a class="iconfont icon-github" href="https://github.com/Portgas-D-Asce"></a>
  <a class="iconfont icon-codeforces" href="https://codeforces.com/profile/Portgas-D-Ace"></a>
  <div class="copyright">
     <b>Copyright &copy; {{ date.getFullYear() }} Portgas·D·Asce </b>
  </div>
</template>
<script setup lang="ts">
import '../assets/fonts/iconfont.css'

const date = new Date();
</script>
<style scoped>
.iconfont {
  margin-left: 10px;
  margin-right: 10px;
}
.copyright {
  font-size: 24px;
  margin-top: 15px;
}
</style>