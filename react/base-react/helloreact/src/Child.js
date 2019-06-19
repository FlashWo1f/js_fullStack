import React, { Component } from 'react'

class Child extends Component {
  state = {}
  handleAnotherFun = () => {
    console.log('handleAnotherFun')
  }
  // 如果不用箭头函数 而是普通函数 this 作用域会被修改 undefined

  handleClick = (e) => {
    console.log(this)
    this.handleAnotherFun()
    console.log(e.target.innerText)
  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      inputVal: e.target.value
    })
  }
  render () {
    return (
      <div onClick={this.handleClick}>
        {this.props.msg}
        <input type="text" 
        placeholder="请输入内容" 
        value={this.state.inputVal}
        onChange={this.handleChange}
        />
      </div>
    )
  }
} 
export default Child