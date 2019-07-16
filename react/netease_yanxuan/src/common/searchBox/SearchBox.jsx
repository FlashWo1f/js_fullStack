import React, { Component } from 'react';
import './searchBox.styl';
// import search_box from '../../assets/search_box'

class SearchBox extends Component {
  state = {}
  render() {
    return (
      <div className="input-box">
        <i className="icon-search"></i>
        <span className="placeholder">搜索商品, 共21829款好物</span>
      </div>
    );
  }
}

export default SearchBox;