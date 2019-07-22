import React, { Component } from 'react';
import GoodInCart from '../../common/goodInCart/GoodInCart'
import './cart.styl'
class Cart extends Component {
  state = {  }
  render() { 
    return (  
      <div className="cartContainer">
        <div className="cartHeader">购物车</div>
        <div className="cartTips">
          <span>你关心的商品降价啦~</span>
          <span>></span>
        </div>
        <GoodInCart />
        <GoodInCart />
        <div className="cartOperation">
          <div className="selectAll">
            <img src={require('../../assets/check_box.png')} alt=""/>
            已选
          </div>
          <div className="countAllPrice">合计:</div>
          <div className="overBooking">下单</div>
        </div>
      </div>
    );
  }
}
 
export default Cart;