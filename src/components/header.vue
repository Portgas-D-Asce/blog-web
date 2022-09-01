<template>
  <div>

  <div class="title"> {{ header.name }} </div>
  <div class="introduce">
    {{ header.description }}
  </div> 
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
  font-size: 4vmin;
  font-weight: bold;
  color: white;
}

.introduce {
  color: white;
  font-size: 2.4vmin;
  padding-top: 8px;
}
</style>