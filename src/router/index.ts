//在router/index.js增加以下代码 
//../views/index.vue 为对应显示文件的位置
import { createRouter, createWebHistory } from 'vue-router'

let router = createRouter({
    history: createWebHistory("/blog"),
    routes: [{
        path: '/',
        component: () => import('../views/home.vue'),
    }, {
        path: '/index.html',
        component: () => import('../views/home.vue')
    }, {
        path: '/categories',
        component: () => import('../views/categories.vue')
    }, {
        path: '/tags',
        component: () => import('../views/tags.vue')
    }, {
        path: '/articles',
        component: () => import('../views/articles.vue')
    }, {
        path: '/articles/:id',
        component: () => import('../views/article.vue')
    }, {
        path: '/:pathMatch+',
        component: () => import('../views/404.vue')
    }],
    //路由跳转不在页面顶部问题
    scrollBehavior(to, from, savedPosion) {
        //会与锚点发生冲突，先处理锚点
        if(to.hash) {
            return {
                el: to.hash
            };
        }
        return {
            top: 0,
            behavior: 'instant'
        };
    }
})
export default router
