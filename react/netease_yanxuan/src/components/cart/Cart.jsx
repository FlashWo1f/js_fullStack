import React, { Component } from 'react';
import GoodInCart from '../../common/goodInCart/GoodInCart'
import Price from '../../common/price/Price'
import './cart.styl'
class Cart extends Component {
  state = {
    oneSelected: {
      id: 0,
      selected: true
    },
    showDelete: false
  }
  render() {
    const { cartList } = this.props
    let totalPrice = 0
    cartList.map(item => {
      if (item.selected === true)
        totalPrice += item.price * item.num
    })
    let allSelectedOrNot = cartList.every(item => item.selected === true)
    return (
      <div className="cartContainer">
        <div className="cartHeader">
          <div className="cartHeader-left">
            购物车
          </div>
          <div className="cartHeader-right" onClick={this.triggerDelete}>
            {
              this.state.showDelete ? '取消' : '编辑'
            }
          </div>
        </div>
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
                  img={item.img}
                  changeCount={this.changeCount}
                  triggerEachSelected={this.triggerEachSelected}
                  showDelete={this.state.showDelete}
                  deleteOne={this.deleteOne}
                />
              </div>
            )
          })
        }
        <div className="cartOperation">
          <div className="selectAll">
            {
              allSelectedOrNot ? <img src={require('../../assets/check_box.png')} onClick={this.triggerAllSelected} /> :
                <div className="notSelected" onClick={this.triggerAllSelected}></div>
            }
            全选
          </div>
          <div className="countAllPrice">合计:<Price newPrice={this.returnFloat(totalPrice)} /></div>
          <div className="overBooking">下单</div>
        </div>
      </div>
    );
  }
  deleteOne = (id) => {
    const { deleteOneGood } = this.props
    deleteOneGood(id)
  }
  triggerDelete = () => {
    const  showDeleteOrNot  = !this.state.showDelete
    this.setState({
      showDelete: showDeleteOrNot
    })
    console.log(showDeleteOrNot)
  }
  changeCount = (count, id) => {
    const { eachCount } = this.props
    eachCount({ count, id })
  }
  triggerEachSelected = (id, selected) => {
    const { eachSelected } = this.props
    eachSelected({ id, selected })
  }
  returnFloat(value) {
    var value = Math.round(parseFloat(value) * 100) / 100;
    var xsd = value.toString().split(".");
    if (xsd.length == 1) {
      value = value.toString() + ".00";
      return value;
    }
    if (xsd.length > 1) {
      if (xsd[1].length < 2) {
        value = value.toString() + "0";
      }
      return value;
    }
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