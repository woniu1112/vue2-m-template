import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: () => import('@/view/login/index.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  let title = (to.meta.title ? to.meta.title + '-' : '') + 'test'
  document.title = title || ''
  next()
})
router.afterEach((route, redirect) => {
})

export default router
