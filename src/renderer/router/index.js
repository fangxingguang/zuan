import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: require('@/views/layout'),
      children: [
        {
          path: '/',
          component: require('@/views/index/index'),
        },
        {
          path: '/taskFree',
          component: require('@/views/taskFree/index'),
        },
        {
          path: '/taskFreeAdd',
          component: require('@/views/taskFree/add'),
        },
        {
          path: '/taskFreeSend',
          component: require('@/views/taskFree/send'),
        },
        {
          path: '/taskFreeMy',
          component: require('@/views/taskFree/my'),
        },
        {
          path: '/taskAutoAdd',
          component: require('@/views/taskAuto/add'),
        },
        {
          path: '/taskAutoSend',
          component: require('@/views/taskAuto/send'),
        },
        {
          path: '/taskAutoMy',
          component: require('@/views/taskAuto/my'),
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
          path: '/login',
          component: require('@/views/user/login'),
        },
        {
          path: '/register',
          component: require('@/views/user/register'),
        },
        {
          path: '/taobaoBind',
          component: require('@/views/taobao/bind'),
        }
      ]
    }
  ]
})
