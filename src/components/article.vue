<template>
    <div id="blog-write" v-html="content"></div>
</template>


<script setup lang="ts">
type Props = {
    content: string;
}

defineProps<Props>()
</script>


<style>
#blog-write {
    counter-reset: h1
}

h1 {
    counter-reset: h2
}

h2 {
    counter-reset: h3
}

h3 {
    counter-reset: h4
}

h4 {
    counter-reset: h5
}

h5 {
    counter-reset: h6
}

/** put counter result into headings */
#blog-write h1:before {
    counter-increment: h1;
    content: counter(h1) " "
}

#blog-write h2:before {
    counter-increment: h2;
    content: counter(h1) "." counter(h2) " "
}

#blog-write h3:before,
h3:before /** override the default style for focused headings */ {
    counter-increment: h3;
    content: counter(h1) "." counter(h2) "." counter(h3) " "
}

#blog-write h4:before,
h4:before {
    counter-increment: h4;
    content: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) " "
}

#blog-write h5:before,
h5:before {
    counter-increment: h5;
    content: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) " "
}

#blog-write h6:before,
h6:before {
    counter-increment: h6;
    content: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) "." counter(h6) " "
}

/** override the default style for focused headings */
#blog-write>h3:before,
#blog-write>h4:before,
#blog-write>h5:before,
#blog-write>h6:before,
h3:before,
h4:before,
h5:before,
h6:before {
    color: inherit;
    border: inherit;
    border-radius: inherit;
    position: inherit;
    left:initial;
    float: none;
    top:initial;
    font-size: inherit;
    padding-left: inherit;
    padding-right: inherit;
    vertical-align: inherit;
    font-weight: inherit;
    line-height: inherit;
}
</style>
