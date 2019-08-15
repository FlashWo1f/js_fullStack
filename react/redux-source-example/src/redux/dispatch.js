/**
 * dispatch是redux中一个非常核心的方法，也是我们在日常开发中最常用的方法之一。
 * dispatch函数是用来触发状态改变的，他接受一个 action 对象作为参数，
 * 然后 reducer 就可以根据 action 的属性以及当前 store 的状态，来生成一个新的状态，
 * 从而改变 store 的状态
 */

function dispatch(action) {
  // action 必须是一个对象
  if (!isPlainObject(action)) {
    throw new Error(
      // ......
    )
  }
  // type必须要有属性，不能是undefined
  if (typeof action.type === 'undefined') {
    throw new Error(
      // ......
    )
  }
  // 禁止在reducers中进行dispatch，因为这样做可能导致分发死循环，同时也增加了数据流动的复杂度
  if (isDispatching) {
    throw new Error('Reducers may not dispatch actions.')
  }

  try {
    isDispatching = true
//       当前的状态和 action 传给当前的reducer，用于生成最新的 state
    currentState = currentReducer(currentState, action)
  } finally {  
    // 派发完毕
    isDispatching = false
  }
  // 将nextListeners交给listeners
  const listeners = (currentListeners = nextListeners)
  // 在得到新的状态后，依次调用所有的监听器，通知状态的变更
  for (let i = 0; i < listeners.length; i++) {
    const listener = listeners[i]
    listener()
  }
  return action
}
