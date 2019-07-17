import React, { Component } from 'react'
import Scroll from '../../common/scroll/Scroll'
import { cart, customServer, back } from '../../assets/indexImg/indeximg'
import { getGoodDetail } from '../../api/index'
import './detail.styl'
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
class Detail extends Component {
  state = {
    allDetail: {},
    refreshScroll: false,
    flag: false
  }
  render() {
    const { allDetail, refreshScroll, flag } = this.state
    return (
      <div className="detailContainer">
        <Scroll refresh={refreshScroll}>
          <div>
            <div className="detail-header">
              <div className="goodSwiperContainer">
                <div className="swiper-wrapper">
                  {this.renderSwiperItem()}
                </div>
                <div className="swiper-pagination"></div>
              </div>
              <div className="goodPrice">
                ￥{allDetail.price}
              </div>
              <div className="goodInfo">
                <div className="info-left">
                  <div className="infoTitle">
                    {allDetail.name}
                  </div>
                  <div className="infoDesc">
                    {allDetail.simpleDesc}
                  </div>
                </div>
                <div className="info-right">
                  <div className="goodCmtRate">
                    {allDetail.goodCmtRate}
                  </div>
                  <div className="goodCmtRateText">
                    好评率
                  </div>
                </div>
              </div>
            </div>
            <div className="optionsAndServer">
              <div className="options">
                已选择：
              </div>
              <div className="server">
                <div>服务:</div>
                <ul>
                  {
                    flag ?
                      allDetail.policyList.map((item, index) => {
                        return (
                          <li key={index}>{item.title}</li>
                        )
                      }) : ''
                  }
                </ul>
              </div>
            </div>
          </div>
        </Scroll>
        <div className="detail-goBack" onClick={this.handleBack}>
          <img src={back} alt="" />
          <span>返回</span>
        </div>
        <div className="detail-footer">
          <div className="customerServer">
            <img src={customServer} alt="" />
          </div>
          <div className="goCart" onClick={this.goCart}>
            <img src={cart} alt="" />
          </div>
          <div className="promptToPurchase">
            立即购买
          </div>
          <div className="addToCart">
            加入购物车
          </div>
        </div>

      </div>
    );
  }
  handleBack = () => {
    this.props.history.go(-1)
  }
  goCart = () => {
    return this.props.history.push({
      pathname: '/cart'
    })
  }
  renderSwiperItem() {
    const { allDetail, flag } = this.state
    console.log('allDetail.picList', allDetail.picList)
    return (
      <>
        {
          flag ?
            allDetail.picList.map((item, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <img src={item} alt="" />
                </div>
              )
            }) : <div className="waitGet">Loading...</div>
        }
      </>
    )
  }
  componentDidMount() {
    getGoodDetail(this.props.match.params.id)
      .then(res => {
        console.log('res', res)
        this.setState({
          allDetail: res,
          flag: true
        })
      }, () => {
        // 刷新scroll
        this.setState({
          refreshScroll: true
        })
        

      })
      .then(() => {
        if (!this.detailSwiper) {
          this.detailSwiper = new Swiper('.goodSwiperContainer', {
            autoplay: {
              delay: 2000,
              stopOnLastSlide: false,
              disableOnInteraction: true,
            },
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            }
          })
        }
      })
  }
}

export default Detail;