import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/HomeContainer'
import MemberContainer from '../components/MemberContainer'
import SearchContainer from '../components/SearchContainer'
import ShopcarContainer from '../components/ShopcarContainer'
import NewsList from '../components/NewsList'
import Newsinfo from '../components/Newsinfo'
import GoodsList from '../components/GoodsList'
import GoodsInfo from '../components/GoodsInfo'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
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
    },
    {
      path: '/home/newslist',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      name: 'Newsinfo',
      component: Newsinfo
    },
    {
      path: '/home/goodslist',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/home/goodsinfo/:id',
      name: 'GoodsInfo',
      component: GoodsInfo
    },
  ]
})
