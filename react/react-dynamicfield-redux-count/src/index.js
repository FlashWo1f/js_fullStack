import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import Counter from './Counter'
import * as serviceWorker from './serviceWorker';
import countReducer from './reducer'


let store = createStore(countReducer)
ReactDOM.render(<App />, document.getElementById('root'));
const renderCount = () => {
  ReactDOM.render(<Counter 
    value={store.getState()} 
    onIncrement={() => {
      store.dispatch({
        type: 'INCREMENT'
      })
    }} 
    onDecrement={() => {
      store.dispatch({
        type: 'DECREMENT'
      })
    }} />, document.getElementById('redux'));
}
renderCount()
store.subscribe(() => {
  console.log(store.getState())
  renderCount()
})

serviceWorker.unregister();
