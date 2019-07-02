import React, { Component } from 'react';
import { observable } from 'mobx'
// 应用状态
// 任何可以从应用状态中推导出来的东西 都应该自动地推导出来
class Store {
  @observable todos = []
}
const store = new Store()
class TodoList extends Component {
  state = {  }
  handleSubmit = () => {
    const value = this.inputNode.value.trim()
    if(value) {
      
    }
  }
  render() { 
    return ( 
      <>
        <div>
          <input type="text" ref={node => this.inputNode = node} />
          <button onClick={this.handleSubmit}>submit</button>
          <ul>
            {
              store.todos.map((todo, index) => {
                return <li key={index}>
                  {todo.text}
                </li>
              })
            }
          </ul>
        </div>
      </>
     );
  }
}
 
export default TodoList;