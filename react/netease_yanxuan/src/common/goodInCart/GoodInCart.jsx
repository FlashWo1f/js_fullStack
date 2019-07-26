import React, { Component } from 'react';
import Price from '../price/Price'
import './goodInCart.styl'
import Stepper from '../stepper/Stepper'
import { Modal } from 'antd-mobile';
class GoodInCart extends Component {
  state = { 
    selected: true,
    eachCount: 1
   }
  render() { 
    const { selected, showDelete } = this.props
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
          <Stepper propsCount={this.props.num}  currentCount={this.currentCount}/>
        </div>
        {
          showDelete ?  <div className="deleteOneGood" onClick={this.deleteOneGood}>
                          删除
                        </div> : ''
                        
        }
      </div>
    );
  }
  showAlert = () => {
    const { deleteOne, id } = this.props
    Modal.alert('提示', '确定删除宝贝嘛', [
      { text: '取消', onPress: () => console.log('取消'), style: 'default' },
      { text: '确定', onPress: () => deleteOne(id) },
    ])
  }
  deleteOneGood = () => {
    this.showAlert()
  }
  componentWillMount(){
    this.setState({
      eachCount: this.props.num,
      selected: this.props.selected
    })
  }
  currentCount = (count) => {
    this.setState({
      eachCount: count
    })
    // this.setState是异步操作
    console.log('goodincart',count)
    // 所以这样操作的话 提交出去的值还是上一次的值 
    // this.props.changeCount(this.state.eachCount, this.props.id)
    this.props.changeCount(count, this.props.id)

  }
  triggerSelected = () => {
    const oneSelected = !this.state.selected
    const { triggerEachSelected, id } = this.props
    this.setState({
      selected: oneSelected
    })
    triggerEachSelected(id, oneSelected)
  }
}
 
export default GoodInCart;