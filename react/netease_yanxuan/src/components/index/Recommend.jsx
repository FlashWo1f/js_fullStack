import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import Scroll from '../../common/scroll/Scroll';
import 'swiper/dist/css/swiper.min.css';
import { swiperList } from '../../assets/indexImg/swiperList';
import { getData } from '../../api/index';
import './styl/recommend.styl';


class Recommend extends Component {
  state = {
    policyDescList: [],
    kingKongList: [],
    newItemList: [],
    refreshScroll: false
  }
  componentDidMount() {
    var mySwiper = new Swiper('.slider-container', {
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      }
    });

    getData()
      .then(res => {
        console.log(res.data.newItemList);
        this.setState({
          policyDescList: res.data.policyDescList,
          kingKongList: res.data.kingKongModule.kingKongList,
          newItemList: res.data.newItemList
        }, () => {
          // 刷新scroll
          this.setState({
            refreshScroll: true
          })
        })
      })
  }
  renderSwiperItem = () => {
    return (
      <>
        {
          swiperList.map((item, index) => {
            return (
              <div className="swiper-slide" key={index}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </>
    )
  }
  renderPolicyDescList = () => {
    const { policyDescList } = this.state;
    return (
      <>
        {
          policyDescList.map((item, index) => {
            return (
              <div className="item" key={index}>
                <img src={item.icon} alt="" />
                <span className="text">{item.desc}</span>
              </div>
            )
          })
        }
      </>
    )
  }
  renderKingKongList = () => {
    const { kingKongList } = this.state;
    return (
      <>
        {
          kingKongList.map((item, index) => {
            return (
              <div className="item" key={index}>
                <img src={item.picUrl} alt="" />
                <span className="text">{item.text}</span>
              </div>
            )
          })
        }
      </>
    )
  }
  renderNewItemList = () => {
    const { newItemList } = this.state;
    return (
      <>
        {
          newItemList.map((item, index) => {
            return (
              <div >

              </div>
            )
          })
        }
      </>
    )
  }
  goGoodsDetail = (id) => {
    console.log(this.props)
    return this.props.history.push({
      pathname: `/detail/${id}`
    })
  }
  renderGoodGrid = () => {
    const { newItemList } = this.state;
    return (
      <>
        {
          newItemList.map((item, index) => {
            return (
              <div className="list" key={index} onClick={() => {this.goGoodsDetail(item.id)}}>
                {/* <Link to={`/detail/${item.id}`}> */}
                <div className="hd">
                  <img src={item.listPicUrl} alt="" />
                </div>
                <div className="name">
                  <span>{item.name}</span>
                  <span className="dynamicPrice">
                    <span>&nbsp;</span>
                    <span className="inner">
                      <span>￥</span>
                      <span>{item.counterPrice}</span>
                    </span>
                  </span>
                </div>
                <div className="tagWraper" style={{display: (item.promTag === undefined) ? 'none' : ''}} >
                  <p className="status">{item.promTag}</p>
                </div>
                {/* </Link> */}
              </div>
            )
          })
        }
      </>
    )
  }
  render() {
    const { refreshScroll } = this.state
    return (
      <div className="recommendPage">
        <Scroll refresh={refreshScroll}>
          <div>
            <div className="slider-container">
              <div className="swiper-wrapper">
                {this.renderSwiperItem()}
              </div>
              <div className="swiper-pagination"></div>
            </div>
            <div className="pllicy-desc">
              {this.renderPolicyDescList()}
            </div>
            <div className="content">
              <div className="kingKong-list">
                {this.renderKingKongList()}
              </div>
              <div className="newItem-list">
                <div className="moduleTitle">
                  <div className="left">
                    <span>新品首发</span>
                  </div>
                  <div className="right">
                    <span>更多</span>
                    <i className="icon"></i>
                  </div>
                </div>
                <div className="goodGrid">
                  {this.renderGoodGrid()}
                </div>
              </div>
            </div>
            <div className="blank"></div>
          </div>
          {/* <Route path={`${match.url}/:id`} component={Album} /> */}
        </Scroll>
      </div>
    );
  }
}

export default Recommend;