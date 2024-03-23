<template>
    <div class="header">
        <div class="fontsz36 font-bold"> {{ header.name }} </div>
        <div class="fontsz20 font-bold"> {{ header.description}}</div>
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
.header {
    margin: 0 auto;
    text-align: center;
}
</style>
