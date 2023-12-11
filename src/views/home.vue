<template>
    <div class="container wh100">
        <div class="motto color-white fontsz28">
            <p>错的不是我，是这个世界</p>
            <p>没有光明不幸吗？需要光明才是真正的不幸</p>
            <p>一切不幸都是由自身能力不足造成的, 我再也不想当那个无能为力的自己了 ......</p>
            <br><br><br><br>
            Let's
            <span><router-link class="destory" to="/categories" id="enter">destory</router-link></span>
            /
            <span><router-link class="rebuild" to="/tags" id="enter">rebulid</router-link></span>
            the world.
        </div>
    </div>
</template>


<style scoped>
.container {
    text-align: center;
    background: url("../assets/image/home.jpg") no-repeat top right;
    background-size: cover;
}

.motto {
    padding: 30vh 5vw 0 5vw;
    width: 50%;
}

.destory {
    color: red;
}

.rebuild {
    color: green;
}
</style>
