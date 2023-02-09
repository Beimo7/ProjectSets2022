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
      component: () => import(`../views/login/LoginDefault.vue`),
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
  // 定义标签名
  const title: string = to.meta.title as string
  document.title = title
  // 如果进入的页面不是登录页，需要进行校验密码信息
  if (to.path !== '/login' && to.path !== '/about') {
    // const type = localStorage.getItem('type')
    // 验证通过
    if (localStorage.getItem('phone') && (localStorage.getItem('verify') || localStorage.getItem('password'))) {
      next()
    }
    // 验证不通过
    else {
      next('/login')
    }
  }
  else {
    next()
  }
})

export default router