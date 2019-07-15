import React, {Component} from 'react'

function List (props) {
  const { value, index } = props
  return (
    <>
      <input type="text" value={value.name} placeholder='name' onChange={(e) => {
        props.onChange(e.target.value, 'name', index)
      }} />
      <input type="text" value={value.content} placeholder='content' onChange={(e) => {
        props.onChange(e.target.value, 'content', index)
      }} />
      <button onClick={() => {props.onDelete(index)}}>删除</button>
    </>
  )
}
class TodoList extends Component {
  state = { 
    lists: [
      {
        name: '',
        content: ''
      }
    ]
   }
  handleChange = (value, key, index) => {
    let lists = this.state.lists.slice(0)
    const obj = lists[index]
    const newObj = {
      ...obj,
      [key]: value
    }
    lists[index] = newObj
    this.setState({
      lists
    })
  }
  handleDelete = (index) => {
    let lists = this.state.lists.slice(0)
    lists.splice(index, 1)
    this.setState({
      lists
    })
  }
  handleADD = () => {
    let lists = this.state.lists.slice(0)
    lists.push({
      name: '',
      content: ''
    })
    this.setState({
      lists
    })
  }
  render() { 
    const lists = this.state.lists
    return ( 
      <>
        {
          lists.map((list, i) => {
            return <List value={list} key={i} index={i} onChange={this.handleChange} onDelete={this.handleDelete} />
          })
        }
        <button onClick={() => {this.handleADD()}}>添加</button>
      </>
     );
  }
}
 
export default TodoList;