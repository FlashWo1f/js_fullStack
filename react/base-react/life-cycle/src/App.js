import React from 'react';
// import logo from './logo.svg';
import Child from './Child'
import Child1 from './Child1'
import Context from './Context'
import Context1 from './Context1'
import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.objRef = React.createRef()
  }
  state = {
    count: 0,
    showChild: true
  }
  handleToggleChild = () => {
    let showChild = this.state.showChild
    this.setState({
      showChild: !showChild
    })
  }
  
  handleChildPropsChange = () => {
    let { count } = this.state
    if (count < 10)
      count++
    this.setState({
      count
    })
  }
  componentDidMount () {
    this.refs.stringRef.innerHTML = 'new String Ref'
    this.methodRef.innerHTML = '&nbsp;new method Ref'
    this.objRef.current.innerHTML = '&nbsp;new Object Ref'
  }
  render () {
    const { count, showChild } = this.state
    return (
      <div>
        <span ref="stringRef">react ref</span>
        <span ref={(ref) => this.methodRef = ref}>method ref</span>
        <span ref={this.objRef}>object ref</span>
        {/* innerHTML */}
        <div dangerouslySetInnerHTML={{        
          __html: `<strong>strong</strong>`
        }}>
        </div>
        <button onClick={this.handleChildPropsChange}>child component props change</button>
        <button onClick={this.handleToggleChild}> toggle Child </button>
        {
          !showChild ? <Child count={count}></Child> : <Child1 count={count}></Child1>
        }
        {/* 传递小花 中间的算propschildren */}
        <Context>
          小花
          <p>姓名</p>
          19
          <p>年龄</p>
        </Context>
        <h3>react 16.x.x</h3>
        <Context1>

        </Context1>
      </div>
    )
  }

}

export default App;
