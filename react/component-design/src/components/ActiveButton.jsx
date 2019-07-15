import React, { Component } from 'react';
class ActiveButton extends Component {
  state = {  }
  keydown = () => {
    const button = this.refs.button
    button.style.opacity = 0.5
  }
  keyup = () => {
    const button = this.refs.button
    button.style.opacity = 1
  }
  render() { 
    return (
      <div className="wrapper" ref="button" 
      style={{backgroundColor: 'pink', width: '100%'}} 
      onTouchStart={this.keydown}
      onTouchEnd={this.keyup}>
        购买
      </div>
    );
  }
}
 
export default ActiveButton;