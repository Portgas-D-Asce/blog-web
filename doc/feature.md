# 工具栏
一开始也是找了一套图标，不过放哪里都觉得丑，最后把它放在了 “键盘” 上
- h 键：返回到起始页面
- c 键：进入目录页面
- t 键：进入标签页面
- p 键：前进
- n 键：后退
- a 键：回到顶部
- v 键：到达底部

`App.vue`

```typescript
const router = useRouter();
onMounted(() => {
    document.onkeyup = (e) => {
        if(e.code === 'KeyH') {
            router.push({path: "/"});
        } else if(e.code === 'KeyC') {
            router.push({path: "/categories"});
        } else if(e.code === 'KeyT') {
            router.push({path: "/tags"});
        } else if(e.code === 'KeyP') {
            router.back();
        } else if(e.code === 'KeyN') {
            router.forward();
        } else if(e.code === 'KeyA') {
            window.scrollTo({top: 0, behavior: 'smooth'});
        } else if(e.code === 'KeyV') {
            window.scrollTo({top: document.body.scrollHeight , behavior: 'smooth'});
        }
    };
});
</script>
```

# 外链音乐播放器

# 评论系统

