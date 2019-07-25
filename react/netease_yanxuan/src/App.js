import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom'
import Index from './components/index/Index'
import Cate from './components/cate/Cate'
import Topic from './components/topic/Topic'
import Cart from './containers/Cart'
import Mine from './components/mine/Mine'
import Detail from './containers/Detail'
import * as tabIcon from './assets/indexImg/indeximg'
import './App.styl'

class App extends React.Component {
  state = {}
  render() {
    const { showTabbar } = this.props
    return (
      <Router>
        <div className="app">
          <div className="tab-wrapper">
            <div className="tab-view">
              <Switch>
                <Route path="/index" component={Index} />
                <Route path="/cate" component={Cate} />
                <Route path="/Topic" component={Topic} />
                <Route path="/cart" component={Cart} />
                <Route path="/mine" component={Mine} />
                <Route path="/detail/:id" component={Detail} />
                <Redirect from="/" to="/index" />
              </Switch>
            </div>
            {
              showTabbar ? <div className="tabBar">
              <div className="tab-item">
                <NavLink className="nav-link" to="/index">
                  <div className="item">
                    <img className="tab-icon" src={tabIcon.index} alt="" />
                    <span className="txt">首页</span>
                  </div>
                </NavLink>
              </div>
              <div className="tab-item">
                <NavLink className="nav-link" to="/cate">
                  <div className="item">
                    <img className="tab-icon" src={tabIcon.cate} alt="" />
                    <span className="txt">分类</span>
                  </div>
                </NavLink>
              </div>
              <div className="tab-item">
                <NavLink className="nav-link" to="/topic">
                  <div className="item">
                    <img className="tab-icon" src={tabIcon.topic} alt="" />
                    <span className="txt">识物</span>
                  </div>
                </NavLink>
              </div>
              <div className="tab-item">
                <NavLink className="nav-link" to="/cart">
                  <div className="item">
                    <img className="tab-icon" src={tabIcon.cart} alt="" />
                    <span className="txt">购物车</span>
                  </div>
                </NavLink>
              </div>
              <div className="tab-item">
                <NavLink className="nav-link" to="/mine">
                  <div className="item">
                    <img className="tab-icon" src={tabIcon.mine} alt="" />
                    <span className="txt">个人</span>
                  </div>
                </NavLink>
              </div>
            </div> : ''
            }
          </div>
        </div>
      </Router>
    )
  }
}


export default App
