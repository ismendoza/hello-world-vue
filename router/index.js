import { createRouter, createWebHistory } from "vue-router"
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../src/views/Home.vue')
    },
   
    {
        path: '/refmethod',
        name: 'RefMethod',
        component: () =>
            import('../src/components/ReactiveRef.vue')
    },
    {
        path: '/reactivemethod',
        name: 'ReactiveInput',
        component: () =>
            import('../src/components/ReactiveInput.vue')
    },
    {
        path: '/computedmethod',
        name: 'Computed',
        component: () =>
            import('../src/components/Computed.vue')
    },
    {
        path: '/lists',
        name: 'Lists',
        component: () =>
            import('../src/components/Listas.vue')
    },
    {
        path: '/references',
        name: 'references',
        component: () =>
            import('../src/views/References.vue')
    }  
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router