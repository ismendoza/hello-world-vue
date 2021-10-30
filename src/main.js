import { createApp } from 'vue'
//import VueRouter from 'vue-router'
import router from '../router'
import App from './App.vue'


createApp(App)
    //.use(VueRouter)
    .use(router)
    .mount('#app')
