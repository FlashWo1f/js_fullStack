import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/HomeContainer'
import MemberContainer from '../components/MemberContainer'
import SearchContainer from '../components/SearchContainer'
import ShopcarContainer from '../components/ShopcarContainer'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HomeContainer',
      component: HomeContainer
    },
    {
      path: '/member',
      name: 'MemberContainer',
      component: MemberContainer
    },
    {
      path: '/search',
      name: 'SearchContainer',
      component: SearchContainer
    },
    {
      path: '/shopcar',
      name: 'ShopcarContainer',
      component: ShopcarContainer
    }
  ]
})
