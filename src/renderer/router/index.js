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
          component: require('@/views/home/index'),
        },
        {
          name: 'taskFree',
          path: '/taskFree',
          component: require('@/views/home/taskFree'),
        },
        {
          name: 'taskFree',
          path: '/taskFreeAdd',
          component: require('@/views/home/taskFreeAdd'),
        },
        {
          path: '/taskFreeSend',
          component: require('@/views/home/taskFreeSend'),
        },
        {
          path: '/taskFreeMy',
          component: require('@/views/home/taskFreeMy'),
        },
        {
          path: '/taskAuto',
          component: require('@/views/home/taskAuto'),
        },
        {
          path: '/flow',
          component: require('@/views/home/flow'),
        },
        {
          path: '/user',
          component: require('@/views/home/user'),
        },
        {
          path: '/express',
          component: require('@/views/home/express'),
        },
        {
          path: '/login',
          component: require('@/views/login'),
        },
        {
          path: '/bindTaobao',
          component: require('@/views/home/bindTaobao'),
        }
      ]
    }
  ]
})
