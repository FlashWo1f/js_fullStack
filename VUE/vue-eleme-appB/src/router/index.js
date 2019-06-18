import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'
import Rating from '@/components/rating/rating'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/rating',
      name: 'Rating',
      component: Rating
    }
  ]
})
