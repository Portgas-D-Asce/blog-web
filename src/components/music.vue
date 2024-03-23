<template>
    <div id="music">
        <h2>Music &#x1F3B6; &#x1F3B6;</h2>
        <!--
        <meting-js
            auto="https://y.qq.com/n/yqq/playlist/7679023489.html"
            order="random"
            volume="0.2">
        </meting-js>
        -->
        <meting-js
            :server="meting.server"
            :type="meting.type"
            :id="meting.id"
            order="random"
            volume="0.2">
        </meting-js>
    </div>
</template>


<script setup lang="ts">
import Meting from '../entity/Meting';

type Props = {
  meting: Meting;
}

defineProps<Props>()
</script>


<style scoped>
#music {
    min-height: 400px;
}

h2 {
    border-bottom: 1px solid #CCC;
    padding-bottom: 8px;
}
</style>
