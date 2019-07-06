import { createStore } from 'redux'
import { combineReducers } from 'redux'

const ADDTO = 'ADDTO'
// const CHANGESTATUS = 'CHANGESTATUS'
const DELETE = 'DELETE'
export function add(value, ID) {
  return { type: ADDTO, value, ID }
}
// export function change() {
//   return { type: CHANGESTATUS }
// }
export function Del(i) {
  return { type: DELETE, i}
}
// function doneOrNot(done = false, action) {
//   switch (action.type) {
//     case 'CHANGESTATUS':
//       return action.done
//     default:
//       return done
//   }
// }
// function delReducer(list = [], action) {
//   switch (action.type){
//     case DELETE: 
//       list.splice(action.i, 1)
//       return list
//     default:
//       return list
//   }
// }
function Reducer(list = [], action) {
  switch (action.type){
    case ADDTO:
      console.log('return', [{value: action.value, ID: action.ID}, ...list])     
      return [{value: action.value, ID: action.ID}, ...list]
    case DELETE:
      let copyList = list.slice(0);
      let index = copyList.findIndex(item => item.ID === action.i);
      // let index = list.indexOf(delItem)
      copyList.splice(index, 1);
      return copyList
    default:
      return list
  }
}

var reducer = combineReducers({
  // doneOrNot,
  Reducer,
})

const store = createStore(reducer)

export default store