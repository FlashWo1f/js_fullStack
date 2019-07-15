// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Header } from 'mint-ui'
import { Swipe, SwipeItem, Button } from 'mint-ui';
import VueResource from 'vue-resource';
import Vuex from 'vuex'
import { Switch } from 'mint-ui';
import { stringify } from 'querystring';
Vue.component(Switch.name, Switch);
Vue.use(Vuex)
Vue.use(VueResource)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)

var car = JSON.parse(localStorage.getItem('car' || []))

var store = new Vuex.Store({
  state: {
    car //将购物车商品的数据
  },
  mutations:{
    addTocar(state, goodsinfo) {
      //点击加入购物车 保存商品信息
      // 假设购物车没有对应的商品
      var flag = false
        state.car.some(item => {
        if(item.id == goodsinfo.id){
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      // 没有此商品信息 加入购物车
      if(!flag){
        state.car.push(goodsinfo)
      }
      // 存储到本地
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    changeCountToList(state, idAndCount) {
      // console.log(idAndCount)
     var curGood = state.car.find(item => item.id == idAndCount.id)
     curGood.count = idAndCount.count
     localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeOneGood(state, afterRemove) {
    state.car = afterRemove
    localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsSelected(state, info){
      state.car.map(item => {
        if(item.id == info.id){
          item.selected = info.selected
        }
      })
    localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getAllCount(state){
      var c = 0
        state.car.forEach(item => {
          c += item.count
        })
      return c
    },
    getGoodsSelected(state){
      var selectedOrNot = {}
      state.car.forEach(item => {
        selectedOrNot[item.id] = item.selected
      })
      return selectedOrNot
    },
    getGoodsCountAndAmount(state){
      var countAndAmount = {
        count: 0,
        amount: 0
      }
      state.car.map(item => {
        if(item.selected){
          countAndAmount.count += item.count
          countAndAmount.amount += item.price * item.count
        }
      })
      return countAndAmount
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

