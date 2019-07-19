import * as types from '../types'

var cartList = JSON.parse(localStorage.getItem('cartList')) || []
var toBePayNum = JSON.parse(localStorage.getItem('toBePayNum')) || 0
const state = {
  cartList,
  toBePayNum
}

const mutations = {
  [types.CART_ADD_TO_CART] (state, status) {
    let cartList = state.cartList.slice(0)
    let i = cartList.findIndex(item => item.id == status.id)
    if (i === -1) {
      cartList.push(status)
      state.cartList = cartList
    } else {
      cartList[i].num += status.num
      state.cartList = cartList
    }
  },
  [types.CART_CHANGE_SELECTED] (state, status) {
    let cartList = state.cartList.slice(0)
    cartList.map(item => {
      if(item.id == status.id){
        item.selected = !status.torf
      }
    })
    state.cartList = cartList
  },
  [types.CART_CHANGE_ALL_SELECTED] (state, status) {
    let cartList = state.cartList.slice(0)
    cartList.map(item => item.selected = !status)
    state.cartList = cartList
  },
  [types.CART_CHANGE_GOOD_NUM] (state, status) {
    let cartList = state.cartList.slice(0)
    let index = cartList.findIndex(item => item.id == status.id)
    cartList[index].num = status.val
  },
  [types.CART_CLEAR_CARTLIST] (state) {
    let cartList = state.cartList.slice(0)
    state.toBePayNum += cartList.length
    cartList = []
    state.cartList = cartList
  },
  [types.CART_DEL_FROM_CART] (state, status) {
    let cartList = state.cartList.slice(0)
    let index = cartList.findIndex(item => item.id == status)
    cartList.splice(index, 1)
    state.cartList = cartList
  }
}

const actions = {
  addToCart ({commit}, status) {
    commit(types.CART_ADD_TO_CART, status)
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
  },
  changeSelected({commit}, status) {
    commit(types.CART_CHANGE_SELECTED, status)
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
  },
  changeAllSelected({commit}, status) {
    commit(types.CART_CHANGE_ALL_SELECTED, status)
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
  },
  changeGoodNum({commit}, status) {
    commit(types.CART_CHANGE_GOOD_NUM, status)
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
  },
  clearCartList({commit}, status) {
    commit(types.CART_CLEAR_CARTLIST)
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
    localStorage.setItem('toBePayNum', JSON.stringify(state.toBePayNum))
  },
  delFromCart({commit}, status) {
    commit(types.CART_DEL_FROM_CART, status)
    localStorage.setItem('cartList', JSON.stringify(state.cartList))
  }
}

const getters = {
  cartList: state => state.cartList,
  cartListLen: state => state.cartList.length,
  allSelected: state => state.cartList.every(item => item.selected === true),
  totalPrice: state => {
    let totalPrice = 0
    state.cartList.forEach(item => {
      if (item.selected === true)
        totalPrice += item.price * item.num
    })
    return totalPrice
  },
  getGoodsSelected: state => {
    var selectedOrNot = {}
    state.cartList.forEach(item => {
      selectedOrNot[item.id] = item.selected
    })
    return selectedOrNot
  },
  toBePayNum: state => state.toBePayNum
}

export default {
  state,
  mutations,
  actions,
  getters
}