import React, { Component } from 'react';
import Price from '../price/Price'
import Stepper from '../stepper/Stepper'
import './goodOptions.styl'
class GoodOptions extends Component {
  state = { 
    colorIndex: -1
  }
  changeColor = (i) => {
    this.setState({
      colorIndex: i
    })
  }
  confirmOptions = () => {
    this.props.getSelect(this.props.color[this.state.colorIndex])
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
            <Stepper goodCount="2" />
          </div>
        </div>
        <div className="confirmOptions" onClick={this.confirmOptions}>确定</div>
      </div>
    );
  }
}
 
export default GoodOptions;