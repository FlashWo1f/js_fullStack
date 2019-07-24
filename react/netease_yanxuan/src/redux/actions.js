import * as ActionType from './actionTypes'

export function addToCart(goodInfo) {
  return { type: ActionType.ADD_TO_CART, goodInfo }
}
