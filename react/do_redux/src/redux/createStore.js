// import { listeners } from "cluster";

export const createStore = (state, storeChange) => {
  const store = state || {}
  const listeners = []  // 组件
  // 订阅发布者模式  listen -> callback
  const subscribe = (listen) => listeners.push(listen)
  
  const dispatch = (action) => {
    const newStore = storeChange(store, action)
    listeners.forEach(item => {
      item(newStore, store) // 新旧状态对比
    })
  }
  return { store, dispatch, subscribe }
}