import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: require('@/views/layout'),
      children: [
        {
          path: '/',
          component: require('@/views/user/login'),
        },
        {
          path: '/index',
          component: require('@/views/index/index'),
        },
        {
          path: '/taskFree',
          component: require('@/views/taskFree/index'),
        },
        {
          path: '/taskAuto',
          component: require('@/views/taskAuto/index'),
        },
        {
          path: '/flow',
          component: require('@/views/flow/index'),
        },
        {
          path: '/user',
          component: require('@/views/user/index'),
        },
        {
          path: '/express',
          component: require('@/views/express/index'),
        },
        {
          path: '/taobaoBind',
          component: require('@/views/taobao/bind'),
        }
      ]
    }
  ]
})

router.beforeEach(({ meta, path }, from, next) => {
  if (!store.state.user.userInfo && path !== '/') {
    return next({ path: '/' })
  }
  next()
})

export default router;