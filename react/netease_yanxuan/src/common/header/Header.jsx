import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Recommend from '../../components/index/Recommend';
import Life from '../../components/index/Life';
import Clothe from '../../components/index/Clothe';
import Food from '../../components/index/Food';
import Clean from '../../components/index/Clean';
import Mombaby from '../../components/index/Mombaby';
import Sport from '../../components/index/Sport';
import Digital from '../../components/index/Digital';
import Global from '../../components/index/Global';
import SearchBox from '../searchBox/SearchBox';
import Scroll from '../scroll/Scroll';
import logo from '../../assets/logo.png';
import './header.styl';

class Header extends Component {
  state = {
    refreshScroll: false,
    tabList: ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色']
  }
  componentDidMount() {
    this.setState({
      refreshScroll: true
    })
  }
  renderTab = () => {
    const { tabList } = this.state;

  }
  render() {
    const { refreshScroll } = this.state;
    return (
      <div className="header">
        <div className="line">
          <img className="logo" src={logo} alt="" />
          <div className="search-box">
            <SearchBox></SearchBox>
          </div>
          <div className="login-btn">登录</div>
        </div>
        <div className="item-wrapper">
          <div className="tabs">
            <NavLink className="nav-link" to="/index/recommend">
              <span className="item">推荐</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/life">
              <span className="item">居家生活</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/clothe">
              <span className="item">服饰鞋包</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/food">
              <span className="item">美食酒水</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/clean">
              <span className="item">个护清洁</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/mombaby">
              <span className="item">母婴亲子</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/sport">
              <span className="item">运动旅行</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/digital">
              <span className="item">数码家电</span>
            </NavLink>
            <NavLink className="nav-link" to="/index/global">
              <span className="item">全球特色</span>
            </NavLink>
          </div>
          <div className="toggleWrap">
            <div className="linear"></div>
            <div className="toggle">
              <div className="icon"></div>
            </div>
          </div>
        </div>
        <div className="header-tab-view">
          <Switch>
            <Route path="/index/recommend" component={Recommend} />
            <Route path="/index/life" component={Life} />
            <Route path="/index/clothe" component={Clothe} />
            <Route path="/index/food" component={Food} />
            <Route path="/index/clean" component={Clean} />
            <Route path="/index/mombaby" component={Mombaby} />
            <Route path="/index/sport" component={Sport} />
            <Route path="/index/digital" component={Digital} />
            <Route path="/index/global" component={Global} />
            <Redirect from="/index" to="/index/recommend" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Header;