import React, { Component } from 'react';
import SearchBox from '../../common/searchBox/SearchBox';
import Scroll from '../../common/scroll/Scroll';
import Loading from '../../common/loading/Loading';
import { getCateList } from '../../api/index';
import './cate.styl'

class Cate extends Component {
  state = {
    cateList: [],
    singleCateList: [],
    refreshScroll: false,
    flag: false,
    mid: 1005000
  }
  componentDidMount() {
    getCateList()
      .then(res => {
        this.setState({
          cateList: res.data.cateList,
          singleCateList: res.data.cateList[0],
          flag: true
        }, () => {
          // 刷新scroll
          this.setState({
            refreshScroll: true
          })
        })
      })
  }

  getData = (id, index) => {
    const { cateList } = this.state;
    this.setState({
      mid: id,
      singleCateList: cateList[index]
    })
  }

  renderCateNavVert = () => {
    const { cateList } = this.state;
    return (
      <>
        {
          cateList.map((item, index) => {
            return (
              <div className={`item ${item.id === this.state.mid ? "active" : ''}`}
                key={index}
                onClick={() => this.getData(item.id, index)}
              >
                <span className="text">{item.name}</span>
              </div>
            )
          })
        }
      </>
    )
  }
  renderCateList = () => {
    const { singleCateList, flag } = this.state;
    return (
      <>
        {
          flag ?
            singleCateList.subCateList.map((cateList, index) => {
              return (
                <div className="cateList" key={index}>
                  <div className="hd">{cateList.subName}</div>
                  <div className="list">
                    {
                      cateList.list && cateList.list.map((list, index) => {
                        return (
                          <div className="cateItem" key={index}>
                            <img className="cateImgWrapper" src={list.wapBannerUrl} alt="" />
                            <div className="name">{list.name}</div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
            : <div className="loading"><Loading title="正在加载中..." show={this.state.flag} /></div>
        }
      </>
    )
  }
  render() {
    const { refreshScroll, singleCateList } = this.state;
    return (
      <div className="catePage">
        <div className="header">
          <SearchBox></SearchBox>
        </div>
        <div className="cateContainer">
          <div className="cateNavVertWrap">
            <Scroll refresh={refreshScroll}>
              <div className="cateNavVert">
                {this.renderCateNavVert()}
              </div>
            </Scroll>
          </div>
          <div className="subCateList">
            <Scroll refresh={refreshScroll}>
              <div className="subCateContainer">
                <div className="item">
                  <img className="banner" src={singleCateList.imgUrl} alt="" />
                  {this.renderCateList()}
                </div>
              </div>
            </Scroll>
          </div>
        </div>
        <div className="blank"></div>
      </div>
    );
  }
}

export default Cate;
