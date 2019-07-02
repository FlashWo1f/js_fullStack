import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import Category from '../components/category/Category.vue'
import Shopcar from '../components/shopcar/Shopcar.vue'
import Mine from '../components/mine/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
  ]
})
