import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/index.vue'),
    },
    {
      path: '/login-register',
      name: 'login-register',
      component: () => import('../views/login_register/index.vue')
    },
    {
      path: '/',
      redirect: 'home',
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/about/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router