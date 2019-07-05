import React, { Component } from 'react';
import { connect } from 'react-redux'
import Album from '../components/album/Album'
import { changeSong } from '../redux/action'

/**
 * container component  =>  此文件的组件 让纯组件和redux建立联系
 * pure component  =>  组件和redux无直接关系
 */

// 在组件改变redux的值
const mapDispatchToProps = (dispatch) => {
  // console.log('dispatch', dispatch)
  return {
    changeCurrentSong: (song) => {
      dispatch(changeSong(song))
    }
  }
}
// 从redux拿到数据
const mapStateToProps = (state) => {

}
export default connect(null, mapDispatchToProps)(Album);
// export default Album