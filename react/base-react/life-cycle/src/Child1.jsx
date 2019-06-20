import React from 'react'
//  React 16.xx.xx之后
class Child1 extends React.Component{
  /**
   * 更新 state
   * 根据返回值 {}
   * null
   */
  state = {
    a: 1
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    // return null
    return {
      ...props,
      ...state
    }
  }
  handleStateChange = ()=> {
    // let {a} = this.state
    this.setState({
      a: 10
    })
  }

  componentDidMount() {
    console.log('componentDidMount')
  }
  // 更新
  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    return 88
  }
  // a === undefined 15.xx
  // a === getSnapshotBeforeUpdate() 16.xx
  componentDidUpdate(preProps, preState, a) {
    console.log('componentDidUpdate', a)
  }
  render() {
    console.log('渲染时候 state', this.state)
    return (
      <div>
        <button onClick={this.handleStateChange}>Child1 change</button>
        Child1 Component
        {this.props.count}
      </div>
    )
  }
}

export default Child1