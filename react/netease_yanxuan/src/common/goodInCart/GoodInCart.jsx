import React, { Component } from 'react';
import Price from '../price/Price'
import './goodInCart.styl'
class GoodInCart extends Component {
  state = { 
    selected: true
   }
  render() { 
    const { selected } = this.state
    // const { price, num, simpleDesc, name, color, id, selected, img } = this.props
    return (
      <div className="goodInCartContainer">
        <div className="selectedOrNot">
          {
            selected ? <img src={require('../../assets/check_box.png')} onClick={this.triggerSelected}/> :
            <div className="notSelected" onClick={this.triggerSelected}></div>
          }
          
        </div>
        <div className="goodInCartPic">
          <img src={this.props.img} alt=""/>
        </div>
        <div className="goodInCartInfo">
          <div className="goodInCartInfo-title">
            {this.props.name}
          </div>
          <div className="goodInCartInfo-spec">
            {this.props.simpleDesc}
          </div>
          <div className="goodInCartInfo-price">
            <Price newPrice={this.props.price} oldPrice="" />
          </div>
        </div>
        <div className="goodInCartCount">

        </div>
      </div>
    );
  }
  triggerSelected = () => {
    this.setState({
      selected: !this.state.selected
    })
  }
}
 
export default GoodInCart;