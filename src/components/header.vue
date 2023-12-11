<template>
    <el-row>
        <el-col :span="3"></el-col>
        <el-col :span="18"><div class="title"> {{ header.name }} </div></el-col>
        <el-col :span="3"></el-col>
    </el-row>
    <el-row>
        <el-col :span="3"></el-col>
        <el-col :span="18" class="introduce"> {{ header.description}}</el-col>
        <el-col :span="3"></el-col>
  </el-row>
  
  
</template>
<script setup lang="ts">
import Base from '../entity/Base';

type Props = {
  header: Base;
}

defineProps<Props>()
</script>
<style scoped>
.title {
  font-size: 36px;
  font-weight: bold;
  color: white;
}

.introduce {
  color: white;
  font-size: 24px;
  padding-top: 8px;
}
</style>