import React, { Component } from 'react';
import './price.styl'
class Price extends Component {
  state = {  }
  render() { 
    const { newPrice, oldPrice = '' } = this.props
    return (
      <div className="priceContainer">
        <div className="newPrice">￥{newPrice}</div>
        {
          oldPrice === '' ? '' : <div className="oldPrice">￥{oldPrice}</div>
        }
      </div>
    );
  }
}
 
export default Price;