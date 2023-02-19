<template>
  <div class="container">
    <div class="motto">
      <p>错的不是我，是这个世界</p>
      <p>没有光明不幸吗？需要光明才是真正的不幸</p>
      <p>一切不幸都是由自身能力不足造成的, 我再也不想当那个无能为力的自己了 ......</p>
      <br><br><br><br>
      Let's
      <span><router-link class="destory" to="/category" id="enter">destory</router-link></span>
      /
      <span><router-link class="save" to="/tag" id="enter">rebulid</router-link></span>
      the world.
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
<style scoped>

.container {
  text-align: center;
  background: url("../assets/image/home.jpg") no-repeat top right;
  width: 100%;
  height: 100%;
  background-size: cover;
}

.motto {
  padding: 30vh 5vw 0 5vw;
  width: 50%;
  color: white;
  font-size: 20pt;
}

a {
  color: white;
}

a:hover {
  color: #2d9ebd;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease, opacity 0.2s ease
}
.destory {
  color: red;
}
.save {
  color: green;
}

</style>
