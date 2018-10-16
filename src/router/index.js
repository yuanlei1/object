import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Children from '@/components/children'

Vue.use(Router)

export default new Router({
  //去掉#号
  mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      // meta: {
      //   keepAlive: true, //此组件需要被缓存
      // }

    },
    {
      path: '/',
      name: 'Children',
      component: Children,
      // meta: {
      //   keepAlive: true, //此组件需要被缓存
      // }
    }
  ]
})
