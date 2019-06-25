// yarn add redux redux-thunk -S

const { createStore, applyMiddleware } = require('redux')
// 类似中间件
const thunk = require('redux-thunk').default
const reducer = require('./reducer/index')
const store = createStore(
  reducer,
  applyMiddleware(thunk)
  )
// subscribe 订阅更新
 store.subscribe(() => {
  console.log('store change:', store.getState())
})
// dispatch 一个action  到filmReducer
store.dispatch({
  type: 'ADD_FILM',
  id: 0,
  name: '流浪地球'
})
store.dispatch((dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'DELETE_FILM',
      id: 0
    })
  }, 3000)
})

console.log(store.getState())