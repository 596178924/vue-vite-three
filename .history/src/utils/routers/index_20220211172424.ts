import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('./../../view/index.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router