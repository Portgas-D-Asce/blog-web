<template>
  <div>
    <div class="eof">__EOF__</div>
    <hr>
    <div class="preandnext">
      <el-link type="primary" class="pre">
        上一篇：xxxxxxxxxxxxxxxxxxxxxxxx
      </el-link>
      <el-link type="primary" class="next">
        yyyyyyyyyyyyyyyyyyyyyyyy：下一篇
      </el-link>
      <div style="clear: both;"></div>
    </div>  
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.eof {
  text-align:center;
  padding-top: 50px;
  color: #666;
  font-weight: bold;
  font-size: 2vmin;
}

.preandnext {
  padding: 0px 20px 30px;
}

.pre {
  float: left;
}

.next {
  float: right;
}
</style>