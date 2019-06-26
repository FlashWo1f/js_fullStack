import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducer/index';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);
console.log('store', store.getState());
ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>
, document.getElementById('root'));

// store.subscribe(() => {
//   ReactDOM.render(<App />, document.getElementById('root')); 不能这样，太耗性能
// })
// store.dispatch({})

serviceWorker.unregister();
