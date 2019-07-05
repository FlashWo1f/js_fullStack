import React, { Component } from 'react';
import { getCarousel, getNewAlbum } from '../../api/recommend'
import { createAlbumByItem } from '../../model/album'
import { Route } from 'react-router-dom'
import Album from '../../containers/Album'
import Swiper from 'swiper'
import Scroll from '../../common/scroll/Scroll'
import Lazyload, { forceCheck } from 'react-lazyload'
import './recommend.styl'
import 'swiper/dist/css/swiper.css'
import Loading from '../../common/loading/Loading'


class Recommend extends Component {
  state = { 
    slideList: [],
    albumList: [],
    refreshScroll: false,
    show: true
   }
  componentDidMount(){
    getCarousel().then(res => {
      // console.log('res', res)
      this.setState({
        slideList: res.data.slider
      }, () => {
        if (!this.sliderSwiper){
          this.sliderSwiper = new Swiper('.slider-container', {
            loop: true,
            autoplay: 3000,
            pagination: '.swiper-pagination'
          })
        }
      })
    })
    getNewAlbum().then(res => {
      let albumList = res.albumlib.data.list
      console.log(albumList)
      this.setState({
        albumList,
        show: false
      }, () => {
        // 请求数据完成后刷新BS
        this.setState({
          refreshScroll: true
        })
      })
    })
  }
  renderSwiperItem() {
    const { slideList } = this.state;
    return (
      <>
      { slideList.map((slider) => {
        return (
          <div className="swiper-slide" key={slider.id}>
            <a href={slider.linkUrl} className="slider-nav">
              <img src={slider.picUrl}
              width="100%" height="100%" alt="" />
            </a>
          </div>
        )
      }) }
      </>
    )
  }
  handletoAlbumDetail = (url) => {
    return () => {
      this.props.history.push({
        pathname: url
      })
    }
  }
  renderAlbum() {
    const { albumList = [] } = this.state
    const { match } = this.props
    // console.log(match)
    return albumList.map((item) => {
      // 渲染 album 
      const album = createAlbumByItem(item)
      return (
        <div className="album-wrapper" key={album.mId}
        onClick={this.handletoAlbumDetail(`${match.url}/${album.mId}`)}>
          <div className="left">
            <Lazyload>
              <img src={album.img} alt="" width="100%" height="100%" />
            </Lazyload>
          </div>
          <div className="right">
            <div className="album-name">
              { album.name }
            </div>
            <div className="singer-name">
              { album.singer }
            </div>
            <div className="public-time">
              { album.publicTime }
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    const { refreshScroll } = this.state
    const { match } = this.props

    return ( 
      <div className="music-recommend">
        {/* forceCheck 方法 */}
        <Scroll refresh={refreshScroll} onScroll={forceCheck}>
          <div>
            <div className="slider-container">
              {/* slider -> swiper */}
              <div className="swiper-wrapper">
                { this.renderSwiperItem() }
              </div>
              <div className="swiper-pagination"></div>
            </div>
            <div className="album-container">
              <h1 className="title">最新专辑</h1>
              <div className="album-list">
                { this.renderAlbum() }
              </div>
            </div>
          </div>
        </Scroll>
        <Loading title="正在加载中……" show={this.state.show} />
        <Route path={`${match.url}/:id`} component={Album} />
      </div>
     );
  }
}

 
export default Recommend;