- 组件状态  兄弟  父子  在redux是多余代码
  大型项目  多组件  多个跨路由的组件共享状态
  共享状态
- 状态的管理  协同
  dispatch(action{type: '', payload: ''}) -> reducer(无差别的状态计算 switch case 状态管理的协同) -> state

1. head body 两个函数组件  共享了单一的全局状态树
2. 状态全局 可以被随意修改
3. dispatch `使状态的改变可控可预期`  任何改变都可以在dispatch找到源头 {type: '', payload: ''}
storeChange 就是  reducer 的前身
4. 通知发生了状态改变 oldState newState 使用新的状态   subscribe  订阅者发布模式