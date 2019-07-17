import React, { Component } from 'react';
import './home.styl'
import GoodInCart from '../../common/goodInCart/GoodInCart'
class Home extends Component {
  state = {  }
  render() {
    return ( 
      <div className="homeContainer">
        <div className="header">
          <div className="header-logo">
            <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt=""/>
          </div>
          <div className="header-search">
            <input type="text" className="header-input" placeholder="搜索严选好物" />
          </div>
          <div className="header-sao">
            <img src={require('../../assets/sao.png')} alt=""/>
          </div>
        </div>
        <div className="body-swiper">
          <GoodInCart />
        </div>
      </div>
    );
  }
}
 
export default Home;