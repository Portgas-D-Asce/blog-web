<template>
  <div>
    <h2>Music &#x1F3B6; &#x1F3B6;</h2>
    <hr>
    <meting-js
      auto="https://y.qq.com/n/yqq/playlist/7679023489.html"
        order="random"
        volume="0.2">
      </meting-js>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted } from 'vue';

onBeforeMount(() => {
  const t = document.createElement('link');
  t.rel = 'stylesheet';
  t.href = 'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css'
  document.body.appendChild(t);
  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = 'https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js';
  document.body.appendChild(s);
});

onMounted(() => {
  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = 'https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js';
  document.body.appendChild(s);
});
</script>