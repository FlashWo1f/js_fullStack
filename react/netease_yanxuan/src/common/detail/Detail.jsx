import React, { Component } from 'react'
import Scroll from '../../common/scroll/Scroll'
import { cart, customServer } from '../../assets/indexImg/indeximg'
import { getGoodDetail } from '../../api/index'
import './detail.styl'
class Detail extends Component {
  state = {
    allDetail: {}
  }
  render() {
    const { allDetail } = this.state
    return (
      <div className="detailContainer">
        <Scroll>
          <div>
            <div className="detail-header">
              <div className="goodSwiperContainer">
                {
                  // console.log('allDetail.picList', allDetail.picList)
                  [allDetail.picList].map((item, index) => {
                    return (
                      <div className="swiper-slide" key={index}>
                        <img src={item} alt="" />
                      </div>
                    )
                  })
                }
              </div>
              <div className="goodPrice">
                ￥299
          </div>
              <div className="goodInfo">
                <div className="info-left">
                  <div className="infoTitle">
                    网易智造四季全屋循环扇
              </div>
                  <div className="infoDesc">
                    源自日本，全屋空气对流循环
              </div>
                </div>
                <div className="info-right">
                  <div className="goodCmtRate">
                    97.9%
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
                服务
              </div>

            </div>
          </div>
        </Scroll>
            <div className="detail-footer">
              <div className="customerServer">
                <img src={customServer} alt="" />
              </div>
              <div className="goCart">
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
  componentDidMount() {
    getGoodDetail(this.props.match.params.id)
      .then(res => {
        console.log('res', res)
        this.setState({
          allDetail: res
        })
      })
  }
}

export default Detail;