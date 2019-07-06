import App from './App'
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
class Root extends Component {
  state = {  }
  render() { 
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root