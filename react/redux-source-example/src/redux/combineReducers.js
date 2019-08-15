function combineReducers(reducers) {
  const reducersKeys = Object.keys(reducers)
  let finalReducers = {}
  for (let i = 0, len = reducersKeys.length; i < len; i++) {
    let key = reducersKeys[i]
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key]
    }
  }
  const finalReducersKeys = Object.keys(finalReducers)
  let hasChanged = false
  const nextState = {}
  return function combination (state = {}, action) {
    for (let j = 0, len = finalReducersKeys.length; j < len; j++) {
      const key = finalReducersKeys[j]
      const reducer = finalReducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      nextState[key] = nextStateForKey
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length
    return hasChanged ? nextState : state
  }
}

export default combineReducers