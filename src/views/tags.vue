<template>
  <div id="tags">
    <router-link v-for="tag in tags" :to="{ path: '/articles', query: { tid: tag.id } }" class="tag">
      <el-tag class="ml-2" :type="get_random_tag_type()"> {{ tag.name }} </el-tag>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { get_tags } from '../api'; 

import { Tag } from "../entity/Tag"

let tags = ref(Array<Tag>());

get_tags({}).then((res) => {
  tags.value = res.data;
});

const get_random_tag_type = () => {
  const tag_type_list:Array<String> = ["primary", "success", "warning", "danger"];
  const idx = Math.floor(Math.random() * 1000) % tag_type_list.length;
  return tag_type_list[idx];
};

</script>
<style scoped>
.tags {
  width: 100vw;
  height: 100vh;
  background: url("../assets/image/tags.png") no-repeat top; 
  background-size: 100vw;
}
</style>