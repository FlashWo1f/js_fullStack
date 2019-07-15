// import { listeners } from "cluster";

export const createStore = (reducer, preloadedState) => {
  const store = preloadedState
  const listeners = []  // 组件
  // 订阅发布者模式  listen -> callback
  const subscribe = (listen) => listeners.push(listen)
  
  const dispatch = (action) => {
    store = reducer(store, action)
    listeners.forEach(item => {
      item()
    })
  }
  const getState = () => {
    return store
  }

  return { 
    store, 
    dispatch, 
    subscribe,
    getState
  }
}
export default createStore