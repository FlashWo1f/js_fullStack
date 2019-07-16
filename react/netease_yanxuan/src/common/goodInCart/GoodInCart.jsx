import React, { Component } from 'react';
import Price from '../price/Price'
import './goodInCart.styl'
class GoodInCart extends Component {
  state = {  }
  render() { 
    return (
      <div className="goodInCartContainer">
        <div className="selectedOrNot">
          <img src={require('../../assets/check_box.png')} alt=""/>
        </div>
        <div className="goodInCartPic">
          <img src="https://yanxuan.nosdn.127.net/69a890ff1cfe400c4e2fdaee7d9e598a.png?imageView&thumbnail=160x0&quality=75" alt=""/>
        </div>
        <div className="goodInCartInfo">
          <div className="goodInCartInfo-title">
            自动喷香机
          </div>
          <div className="goodInCartInfo-spec">
            主机+4罐芳香喷雾罐
          </div>
          <div className="goodInCartInfo-price">
            <Price newPrice="233" oldPrice="300" />
          </div>
        </div>
        <div className="goodInCartCount">

        </div>
      </div>
    );
  }
}
 
export default GoodInCart;