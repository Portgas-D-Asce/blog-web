# 页面未置顶
## 问题
当切换页面时，新页面并非是从顶部开始的，而是从半中腰开始显示

## 解决
`/src/router/index.ts` 中添加以下配置
```typescript
const router = createRouter({
    history: createWebHistory("/"),
    routes: [],
    scrollBehavior() {
        return { top:0 }
    }
});
```

# 刷新 404

## 问题
打包部署到 nginx 后，刷新/回退页面会导致 404。vue 是单页面，路径文件并非真正存在。
## 解决
修改 nginx 配置 `cat /etc/nginx/nginx.conf` 
```conf
server {
    server_name  _; #你的域名 
    listen       80 default_server;
    listen       [::]:80 default_server;
    root         /usr/share/nginx/html;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    location / {
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

# 站点图标不显示

？？？？？？