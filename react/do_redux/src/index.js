import { state } from './redux/state'
import { storeChange } from './redux/storeChange'
import { createStore } from './redux/createStore' 

const { store, dispatch, subscribe} = createStore(state, storeChange)
// 管理状态  修改
// function dispatch(state, action) {
//   // 状态的修改是可预期的
//   switch(action.type) {
//     case 'HEAD_COLOR':
//       state.head.color = action.color
//       break
//     case 'BODY_TEXT':
//       state.body.text = action.text
//       break
//     default: 
//   }
// }
function renderHead(state) {
  console.log('render head')
  const head = document.getElementById('head')
  head.innerText = state.head.text
  head.style.color = state.head.color
  // 随意地修改 不推荐  dispatch()应声而来
  // state.body.text = '我是经过 head 修改的 body '
  // let action = {
  //   type: 'BODY_TEXT',
  //   text: '我是经过 head 修改的 body'
  // }
  // dispatch(action)

}
function renderBody(state) {
  console.log('render body')
  const body = document.getElementById('body')
  body.innerText = state.body.text
  body.style.color = state.body.color
}

function renderApp(store, oldStore = {}) {
  if (store === oldStore) return;
  store.head !== oldStore.head && renderHead(store)
  store.body !== oldStore.body && renderBody(store)
  // oldState  在生成newState时 怎么渲染新的state
}
subscribe((store, oldStore) => renderApp(store, oldStore))
renderApp(store)
dispatch({
  type: 'BODY_TEXT',
  text: '我是经过 head 修改的 body'
})
// renderApp(store)  // 再次渲染  但是这样效率低 性能开销大  引出MVVM的diff算法
