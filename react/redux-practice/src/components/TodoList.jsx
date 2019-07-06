import React, { Component } from 'react';
import List from './List'
let ID = -1
class TodoList extends Component {
  state = { 
    // value: ''
   }
  addTo = (ID) => {
    let value = this.refs.inputText.value
    this.props.addToList(value, ID)
    // let { addReducer } = this.props
    console.log('props', this.props)
  }
  delete = (i) => {
    this.props.DelToList(i)
  }
  render() { 
    // 真实 dom
    return (
      <div className="container">
        <input type="text" ref="inputText" />
        <button onClick={ () => {
          if(this.refs.inputText.value.trim()){
            ID++;
            this.addTo(ID)
          }
        }}>添加</button>  
        <List valueAndId={this.props.inputValue} dele={this.delete} />
      </div> 
    );
  }
}
 
export default TodoList;