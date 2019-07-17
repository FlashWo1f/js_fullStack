import React, { Component } from 'react';
import Price from '../price/Price'
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
  render() { 
    const { colorIndex } = this.state
    return (
      <div className="goodOptionsContainer">
        <div className="goodOptions-header">
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
        </div>
        <div className="goodOptions-body">
          <div className="options-color">
            <div>颜色</div>
            <div className="optionsText-color">
              <div className={colorIndex === 0 ? 'oneColorOption colorActive' : 'oneColorOption'}  onClick={() => this.changeColor(0)}>白色</div>
              <div className={colorIndex === 1 ? 'oneColorOption colorActive' : 'oneColorOption'}  onClick={() => this.changeColor(1)}>黑色</div>
              <div className={colorIndex === 2 ? 'oneColorOption colorActive' : 'oneColorOption'}  onClick={() => this.changeColor(2)}>黄色</div>
            </div>
          </div>
          <div className="options-count">
            <div>数量</div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default GoodOptions;