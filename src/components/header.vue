<template>
    <el-row>
        <el-col :span="18" :offset="3"><div class="title fontsz36 font-bold"> {{ header.name }} </div></el-col>
    </el-row>
    <el-row>
        <el-col :span="18" :offset="3" class="introduce fontsz24 font-bold"> {{ header.description}}</el-col>
    </el-row>
</template>


<script setup lang="ts">
import Base from '../entity/Base';

type Props = {
  header: Base;
}

defineProps<Props>()
</script>
