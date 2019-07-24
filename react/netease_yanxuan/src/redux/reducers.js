import { combineReducers } from 'redux'
import * as Actiontype from './actionTypes'
const initialState = {
  showStatus: false,
  showTabbar: true,
  shopcart: JSON.parse(localStorage.getItem('cart')) || []
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
      localStorage.setItem('cart', JSON.stringify(cart))
      return cart
    default:
      return shopcart

  }
}
function showTabbar(showTabbar = initialState.showTabbar, action) {
  switch (action.type) {
    case Actiontype.TRIGGER_TABBAR:
      let showOrNot = showTabbar
      showOrNot = !showOrNot
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