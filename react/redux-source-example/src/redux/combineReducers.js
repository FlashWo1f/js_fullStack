function combineReducers(reducers) {
  const reducersKeys = Object.keys(reducers)
  let finalReducers = {}
  for (let i = 0, len = reducersKeys.length; i < len; i++) {
    let key = reducersKeys[i]
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducer[key]
    }
  }
  const finalReducersKey = Object.keys(finalReducers)
  return function (state = {}, action) {
    for (let j = 0, len = finalReducersKey.length; j < len; j++) {
      const key = finalReducersKey[i]
      const reducer = finalReducersKey[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      nextState[key] = nextStateForKey
    }
  }
}

export default combineReducers