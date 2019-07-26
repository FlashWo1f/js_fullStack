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
  componentWillMount(){
    const { propsCount = 1 } = this.props
    this.setState({
      count: propsCount
    })
  }
  componentDidMount() {
    var { count } = this.state
    if (count === 1) {
      this.refs.stepperReduce.style.opacity = '0.5'
    }
  }
  add = () => {
    const { currentCount } = this.props
    var { count } = this.state
    let addCount = count
    addCount += 1
    this.setState({
      count: addCount
    })
    currentCount(addCount)
  }
  reduce = () => {
    const { currentCount } = this.props
    var { count } = this.state
    let reduceCount = count
    if (reduceCount > 1) {
      reduceCount -= 1
      this.setState({
        count: reduceCount
      })
      currentCount(reduceCount)
    }
  }
}
 
export default Stepper;