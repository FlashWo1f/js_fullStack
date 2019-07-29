import React, { Component } from 'react';
import Price from '../price/Price'
import Stepper from '../stepper/Stepper'
import './goodOptions.styl'
import { Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
class GoodOptions extends Component {
  state = { 
    colorIndex: -1,
    count: 1
  }
  changeColor = (i) => {
    this.setState({
      colorIndex: i
    })
  }
  confirmOptions = () => {
    const props = this.props
    const { colorIndex, count } = this.state
    if(this.props.color[this.state.colorIndex]) {
      this.props.getSelect(this.props.color[this.state.colorIndex])
      let goodInfo = {
        price: props.price,
        id: props.id,
        name: props.name,
        img: props.img,
        simpleDesc: props.simpleDesc,
        color: props.color[colorIndex].value,
        num: count,
        selected: true
      }
      props.dispatchToCart(goodInfo)
      Toast.success('加入购物车成功!', 2)
    } else {
      Toast.fail('请选择规格', 1.5)
    }
  }
  currentCount = (count) => {
    this.setState({
      count
    })
  }

  render() { 
    const { colorIndex } = this.state
    const props = this.props
    return (
      <div className="goodOptionsContainer">
        <div className="goodOptions-header">
          <div className="goodInCartPic">
            <img src={props.img} alt=""/>
          </div>
          <div className="goodInCartInfo">
            <div className="goodInCartInfo-title">
              {props.name}
            </div>
            <div className="goodInCartInfo-spec">
              {props.simpleDesc}
            </div>
            <div className="goodInCartInfo-price">
              <Price newPrice={props.price} oldPrice="" />
            </div>
          </div>
        </div>
        <div className="goodOptions-body">
          <div className="options-color">
            <div>{props.colorOrOther}</div>
            <div className="optionsText-color">
              {
                props.color && props.color.map((item, index) => {
                  return (
                    <div className={colorIndex === index ? 'oneColorOption colorActive' : 'oneColorOption'} 
                         onClick={() => this.changeColor(index)}
                         key={index}>{item.value}</div>
                  )
                })
              }
            </div>
          </div>
          <div className="options-count">
            <div className="options-countText">数量</div>
            <Stepper currentCount={this.currentCount} />
          </div>
        </div>
        <div className="confirmOptions" onClick={this.confirmOptions}>确定</div>
      </div>
    );
  }
}
 
export default GoodOptions;