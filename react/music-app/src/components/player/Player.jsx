import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import MiniPlayer from './MiniPlayer'
import './player.styl'
import { Song } from '../../model/song'
class Player extends Component {
  constructor(props) {
    super(props)
    this.currentSong = new Song(0, "", "", "", 0, "", "")
  }
  state = {  }
  showPlayer = () => {
    this.props.showMusicPlayer(true)
  }
  render() { 
    console.log('play props', this.props)
    if (this.props.currentSong && this.props.currentSong.url) {
      if(this.currentSong.id !== this.props.currentSong.id) {
        this.currentSong = this.props.currentSong
      }
    }
    let song = this.currentSong
    return (
      <div className="player-container">
        <CSSTransition in={this.props.showStatus} timeout={300} classNames="player-rotate">
          <div className="player" ref="player">
            {/* 头 start */}
            <div className="header">
              <span className="header-back" onClick={this.hidePlayer}>
                <i className="icon-back"></i>
              </span>
              <div className="header-title">
                {song.name}
              </div>
            </div>
            {/* 头 end */}
            <div className="singer-top">
              <div className="singer">
                <div className="singer-name">{song.singer}</div>
              </div>
            </div>
          </div>
        </CSSTransition>
        <MiniPlayer showStatus={this.props.showStatus} showMiniPlayer={this.showPlayer}></MiniPlayer>
      </div>
    );
  }
}
 
export default Player;