import React from 'react'
//  React 16.xx.xx之前
class Child extends React.Component {
  state = {
    childCount: 0
  }
  handleChildCount = () => {
    let {childCount} = this.state
    childCount++
    this.setState({
      childCount
    })
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.interval = setInterval(() => {
      console.log('child')
    }, 1000)
  }
  // props 更新
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    // 控制组件要不要更新  组件 性能优化的时候 控制不必要的更新
    if (nextProps.count !== this.props.count) {
      return true
    }
    return true
  }
  componentWillUnmount(){
    clearInterval(this.interval)
    console.log('componentWillUnmount')
  }
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  render () {
    console.log('render function')
    let {count} = this.props
    let {childCount} = this.state
    return (
      <div>
        <button onClick={this.handleChildCount}>childCountChange</button>
        child component 
        count: {count}
        childCount: {childCount}
      </div>
    )
  }
}
export default Child