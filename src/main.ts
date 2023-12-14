import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'


const blog = createApp(App);
blog.use(router);
blog.use(ElementPlus);
blog.mount('#app')
