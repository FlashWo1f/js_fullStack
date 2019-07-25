import * as ActionType from './actionTypes'

export function addToCart(goodInfo) {
  return { type: ActionType.ADD_TO_CART, goodInfo }
}
export function showTabbar(flag) {
  return { type: ActionType.TRIGGER_TABBAR, flag}
}
export function changeAllSelected(selectedFlag) {
  return { type: ActionType.CHANGE_ALL_SELECT, selectedFlag }
}