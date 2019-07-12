import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Search from '@/pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/search'
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
