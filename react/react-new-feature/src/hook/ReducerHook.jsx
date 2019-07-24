import React, { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return new Error('ERROR')
  }
}

function ReducerHook (){
  const [ state, dispatch ] = useReducer(reducer, 0)
  return (
    <div>
      state: {state}
      <button onClick={() => {
        dispatch({type: 'INCREMENT'})
      }}>
        INCREMENT
      </button>
    </div>
  )
}
export default ReducerHook