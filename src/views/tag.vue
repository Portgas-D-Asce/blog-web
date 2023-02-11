<template>
  <div id="tags" class="tags">
    <h2 class="todo">打算实现成球形标签云的样子</h2>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <router-link v-for="tag in tags" :to="{ path: '/tag/' + tag.id }" class="tag">
      <el-tag class="ml-2" :type="get_random_tag_type()"> {{ tag.name }} </el-tag>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { get } from '../api'; 

import { Tag } from "../entity/Tag"

const route = useRoute()
let tags = ref(Array<Tag>());

get(route.path).then((res) => {
  tags.value = res.data;
});

const get_random_tag_type = () => {
  const tag_type_list:Array<String> = ["primary", "success", "warning", "danger"];
  const idx = Math.floor(Math.random() * 1000) % tag_type_list.length;
  return tag_type_list[idx];
};

</script>
<style scoped>
.todo {
  color: white;
}
.tags {
  width: 100vw;
  height: 100vh;
  background: url("../assets/image/tags.png") no-repeat top; 
  background-size: 100vw;
  text-align: center;
}
</style>