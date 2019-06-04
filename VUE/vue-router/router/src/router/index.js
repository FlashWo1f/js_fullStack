import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Look from '@/components/Look'
import LookOne from '@/components/LookOne'
import LookTwo from '@/components/LookTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Look',
      name: 'Look',
      component: Look,
      children: [
        {
          path: '/',
          name: 'Look',
          component: Look
        },
        {
          // 子路由不要path/
          path: 'look-one',
          name: 'LookOne',
          component: LookOne
        },{
          path: 'look-two',
          name: 'LookTwo',
          component: LookTwo
        }
      ]
    },
    {
      path: '/detail',
      redirect: '/'
    }
  ]
})
