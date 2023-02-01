import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/', 
      redirect: '/about',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(`../views/login/Login.vue`),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(`../views/homepage/HomePage.vue`),
      meta: {
        title: 'XX'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(`../views/about/About.vue`),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/price',
      name: 'price',
      component: () => import(`../views/price/Price.vue`),
      meta: {
        title: '定价'
      }
    },
    {
      path: '/help',
      name: 'help',
      component: () => import(`../views/help/Help.vue`),
      meta: {
        title: '帮助'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const title: string = to.meta.title as string
  document.title = title
  next()
})

export default router