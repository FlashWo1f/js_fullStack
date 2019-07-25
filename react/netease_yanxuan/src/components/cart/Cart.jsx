import React, { Component } from 'react';
import GoodInCart from '../../common/goodInCart/GoodInCart'
import './cart.styl'
class Cart extends Component {
  state = { 
    oneSelected: {
      id: 0,
      selected: true
    },
    allSelected: true
   }
  render() { 
    const { cartList } = this.props
    const { allSelected } = this.state
    return (  
      <div className="cartContainer">
        <div className="cartHeader">购物车</div>
        <div className="cartTips">
          <span>你关心的商品降价啦~</span>
          <span>></span>
        </div>
        {/* <GoodInCart selectedOrNot={this.selectedOrNot} />
        <GoodInCart /> */}
        {
          cartList.map(item => {
            return (
              <div key={item.id}>
                <GoodInCart price={item.price}
                          color={item.color}
                          id={item.id}
                          name={item.name}
                          num={item.num}
                          selected={item.selected}
                          simpleDesc={item.simpleDesc}
                          img={item.img} />
              </div>
            )
          })
        }
        <div className="cartOperation">
          <div className="selectAll">
          {
            allSelected ? <img src={require('../../assets/check_box.png')} onClick={this.triggerAllSelected}/> :
            <div className="notSelected" onClick={this.triggerAllSelected}></div>
          }
            已选
          </div>
          <div className="countAllPrice">合计:</div>
          <div className="overBooking">下单</div>
        </div>
      </div>
    );
  }
  triggerAllSelected = () => {
    const { allSelectedChange } = this.props
    const { allSelected } = this.state
    this.setState({
      allSelected: !this.state.allSelected
    })
    allSelectedChange(!allSelected)
  }
}
 
export default Cart;