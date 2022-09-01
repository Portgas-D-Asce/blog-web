//在router/index.js增加以下代码 
//../views/index.vue 为对应显示文件的位置
import { createRouter, createWebHistory } from 'vue-router'
 
const routerHistory = createWebHistory()
 
let router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: () => import('../views/home.vue')
    },
    {
      path: '/categories',
      component: () => import('../views/categories.vue')
    },
    {
      path: '/tags',
      component: () => import('../views/tags.vue')
    },
    {
      path: '/articles',
      component: () => import('../views/articles.vue')
    },
    {
      path: '/article',
      component: () => import('../views/article.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/404.vue')
    }
  ]
})
export default router
