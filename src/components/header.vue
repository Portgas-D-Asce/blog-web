<template>
  <div class="title"> {{ header.name }} </div>
  <div class="introduce">
    {{ header.description ? header.description : "这货还没有介绍！"}}
  </div>
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