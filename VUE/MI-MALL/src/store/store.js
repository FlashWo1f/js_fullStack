import Vuex from 'vuex'
import Vue from 'vue'
import comm from './modules/comm'
import cart from './modules/cart'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    comm,
    cart
  }
})