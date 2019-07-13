import * as types from '../types'

var cartList = JSON.parse(localStorage.getItem('cart' || []))
const state = {
  cartList
}

const mutations = {
  [types.CART_ADD_TO_CART] (state, status) {
    let cartList = state.cartList
    let i = cartList.findIndex(item => item.id == status.id)
    if (i === -1) {
      cartList.push(status)
      state.cartList = cartList
    } else {
      cartList[i].num += status.num
      state.cartList = cartList
    }
  }
}

const actions = {
  addToCart ({commit}, status) {
    commit(types.CART_ADD_TO_CART, status)
    localStorage.setItem('cart', JSON.stringify(state.cartList))
  }
}

const getters = {
  cartList: state => state.cartList,
  cartListLen: state => state.cartList.length
}

export default {
  state,
  mutations,
  actions,
  getters
}