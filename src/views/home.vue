<template>
  <div id="home">
    <div id="zzz">
      <p>错的不是我，是这个世界</p>
      <p>没有光明不幸吗？需要光明才是真正的不幸</p>
      <p>一切不幸都是由自身能力不足造成的, 我再也不想当那个无能为力的自己了 ......</p>
      <br><br><br><br>
      <router-link to="/categories">Let's destory the world.</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
<style scoped>

#home {
  text-align: center;
  background: url("../assets/image/home.jpg") no-repeat top right;
  width: 100%;
  height: 100%;
  background-size: cover;
}

#zzz {
  padding: 30vh 5vw 0 5vw;
  width: 50%;
  color: white;
  font-size: 20pt;
}

#yyy {
  font-size: 25pt;
  color: white;
}
</style>
