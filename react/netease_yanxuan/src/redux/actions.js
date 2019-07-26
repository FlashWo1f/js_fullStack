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
export function changeEachCount(countInfo) {
  return { type: ActionType.CHANGE_EACH_COUNT, countInfo}
}
export function changeEachSelected(selectedInfo) {
  return { type: ActionType.CHANGE_EACH_SELECTED, selectedInfo}
}
export function delOneGood(goodId) {
  return { type: ActionType.DELETE_ONE_GOOD, goodId}
}