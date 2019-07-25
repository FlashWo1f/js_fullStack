import { Provider } from './context'
import React, { Component } from 'react';
class EnhancedProvider extends Component {
  state = {  }
  render() { 
    const { store } = this.props
    return (
      <Provider value={store}>
        {this.props.children}     
        {/* 需要上面这行 */}
      </Provider>
    );
  }
}

 
export default EnhancedProvider;