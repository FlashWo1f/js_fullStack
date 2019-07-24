import React, { Component } from 'react'
import Scroll from '../../common/scroll/Scroll'
import { cart, customServer, back } from '../../assets/indexImg/indeximg'
import { getGoodDetail } from '../../api/index'
import './detail.styl'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import GoodOptions from '../goodOptions/GoodOptions'
class Detail extends Component {
  state = {
    allDetail: {},
    refreshScroll: false,
    flag: false,
    showOptions: false,
    getSelect: '请选择规格'
  }
  render() {
    const { allDetail, refreshScroll, flag, getSelect } = this.state
    return (
      <div className="detailContainer">
        <Scroll refresh={refreshScroll}>
          <div>
            <div className="detail-header">
              <div className="goodSwiperContainer">
                <div className="swiper-wrapper">
                  {this.renderSwiperItem()}
                </div>
                <div className="swiper-pagination"
                style={{
                  color: '#666666',
                  marginLeft: 150
                }}
                ></div>
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
                已选择：{getSelect}
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
        {
          this.state.showOptions ? 
          (<div className="detail-option">
            <div className="detail-mask" onClick={this.handleCloseOptions}></div>
            <div className="detail-options">
              <GoodOptions img={allDetail.picList[0]}
                           colorOrOther={allDetail.colorOrOther}
                           color={allDetail.color}
                           price={allDetail.price}
                           name={allDetail.name}
                           simpleDesc={allDetail.simpleDesc}
                           getSelect={this.getSelect}
                           id={allDetail.id}
                           dispatchToCart={this.dispatchToCart}
              />
            </div>
          </div> ) : ''
          
        }
        
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
          <div className="addToCart" onClick={this.handleShowOptions}>
            加入购物车
          </div>
        </div>

      </div>
    );
  }
  dispatchToCart = (goodInfo) => {
    const { addGoodToCart } = this.props
    addGoodToCart(goodInfo)
  }
  getSelect = (val) => {
    this.setState({
      getSelect: val.value,
      showOptions: false
    })
  }
  handleShowOptions = () => {
    this.setState({
      showOptions: true
    })
  }
  handleCloseOptions = () => {
    this.setState({
      showOptions: false
    })
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
    // console.log('allDetail.picList', allDetail)
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
    // console.log('props', this.props)
    getGoodDetail(this.props.match.params.id)
      .then(res => {
        // console.log('res', res)
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
              type: 'fraction',
              renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                       '/' +
                       '<span class="' + totalClass + '"></span>';
              },
            },
          })
        }
      })
  }
}

export default Detail;