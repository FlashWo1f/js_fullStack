import React, { Component } from 'react';
import './stepper.styl'
class Stepper extends Component {
  state = { 
    count: 1
   }
  render() { 
    
    var { count } = this.state
    return (
      <div className="stepperContainer">
        <div className="stepperReduce" ref="stepperReduce" onClick={this.reduce}>-</div>
        <div className="stepperCount">{ count }</div>
        <div className="stepperAdd" onClick={this.add}>+</div>
      </div>
    );
  }
  componentDidMount() {
    var { goodCount = 1 } = this.props
    this.setState({
      count: goodCount
    })
    var { count } = this.state
    console.log(count)
    if (count === 1) {
      this.refs.stepperReduce.style.opacity = '0.5'
    }
  }
  add = () => {
    var { count } = this.state
    let addCount = count
    addCount += 1
    this.setState({
      count: addCount
    })
  }
  reduce = () => {
    var { count } = this.state
    let reduceCount = count
    reduceCount -= 1
    this.setState({
      count: reduceCount
    })
  }
}
 
export default Stepper;