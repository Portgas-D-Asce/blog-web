<template>
  <div class="copyright">
    <p><b>版权声明：</b> 码字不易，尊重版权，转载请注明出处！</p>
    <p><b>免责声明：</b> 本文部分信息搜集自互联网，如若侵犯了您的相关权益，请告知，本站将立刻处理。</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<style scoped>
.copyright {
  border-left: 5px solid #87CEFA;
  background-color: #f7f7fc;
  padding: 0px 7px;
}

.copyright p {
  margin-top: 0vmin !important;
}
</style>