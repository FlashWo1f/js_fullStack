import React, { Component } from 'react';

const withLogin = (Com) => {
  const isLogin = true
  class NewComponent extends Component {
    state = {  }
    render() { 
      if (!isLogin) {
        return (
          <button>需要登陆</button>
        )
      }
      return ( 
        <Com />
       );
    }
  }
  NewComponent.displayName = `withLogin(${Com.displayName})`
  return NewComponent
}

export default withLogin