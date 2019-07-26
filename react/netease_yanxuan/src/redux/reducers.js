import { combineReducers } from 'redux'
import * as Actiontype from './actionTypes'
const initialState = {
  showStatus: false,
  showTabbar: true,
  shopcart: JSON.parse(localStorage.getItem('cartList')) || []
}

// function showStatus(showStatus = initialState.showStatus, action) {
//   switch (action.type) {
//     case Actiontype.SHOW_PLAYER:
//       return action.showStatus
//     default:
//       return showStatus
//   }
// }

function cart(shopcart = initialState.shopcart, action) {
  switch (action.type) {
    case Actiontype.ADD_TO_CART:
      let cart = shopcart.slice(0)
      let i = cart.findIndex(item => item.id === action.goodInfo.id)
      if (i === -1) {
        cart.push(action.goodInfo)
      } else {
        cart[i].num += action.goodInfo.num
      }
      localStorage.setItem('cartList', JSON.stringify(cart))
      return cart
    case Actiontype.CHANGE_ALL_SELECT:
      let cart1 = shopcart.slice(0)
      cart1.map(item => item.selected = action.selectedFlag)
      localStorage.setItem('cartList', JSON.stringify(cart1))
      return cart1
    case Actiontype.CHANGE_EACH_COUNT:
      let cart2 = shopcart.slice(0)
      let countIndex = cart2.findIndex(item => item.id === action.countInfo.id)
      cart2[countIndex].num = action.countInfo.count
      localStorage.setItem('cartList', JSON.stringify(cart2))
      return cart2
    case Actiontype.CHANGE_EACH_SELECTED:
      let cart3 = shopcart.slice(0)
      let selectIndex = cart3.findIndex(item => item.id === action.selectedInfo.id)
      cart3[selectIndex].selected = action.selectedInfo.selected
      localStorage.setItem('cartList', JSON.stringify(cart3))
      return cart3
    case Actiontype.DELETE_ONE_GOOD:
      let cart4 = shopcart.slice(0)
      let delIndex = cart4.findIndex(item => item.id === action.goodId)
      cart4.splice(delIndex, 1)
      localStorage.setItem('cartList', JSON.stringify(cart4))
      return cart4
    default:
      return shopcart

  }
}
function showTabbar(showTabbar = initialState.showTabbar, action) {
  switch (action.type) {
    case Actiontype.TRIGGER_TABBAR:
      let showOrNot = showTabbar
      showOrNot = action.flag
      return showOrNot
    default:
      return showTabbar
  }
}



export default combineReducers({
  // showStatus
  cart,
  showTabbar
})