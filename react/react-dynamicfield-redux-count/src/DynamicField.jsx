import React from 'react';
import { Input, Button, Divider } from 'antd'
function Field(props) {
  const { value, index } = props
  return (
    <div>
      <Divider></Divider>
      <div>
        姓名：<Input value={value.name} placeholder="name" onChange={(e) => {
          // 'name' 和 index 识别 是哪个Field的哪个输入框传过来的值
          props.onChange(e.target.value, 'name', index)
        }} />
      </div>
      <div>
        地址：<Input value={value.address} placeholder="address" onChange={(e) => {
          props.onChange(e.target.value, 'address', index)
        }} />
      </div>
      <Button type="primary" onClick={() => {
        props.onDelete(index)
      }}>删除</Button>
    </div>
  )
}

class DynamicField extends React.Component{
  state = {
    lists: [
      {
        name: '',
        address: ''
      },
    ]
  }
  handleChange = (value, key, i) => {
    let lists = this.state.lists.slice(0)
    const obj = lists[i]
    const newObj = {
      ...obj,
      // [key] 替换成穿过来的key (name or address)
      [key]: value
    } 
    lists[i] = newObj
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
  handleAddField = () => {
    let lists = this.state.lists.slice(0)
    lists.push({
      name: '',
      address: ''
    })
    this.setState({
      lists
    })
  }
  render(){
    const { lists } = this.state
    return (
      <div>
        {
          lists.map((list, i) => {
            return <Field key={i} value={list} onChange={this.handleChange} index={i}
            onDelete={this.handleDelete}
            ></Field>
          })
        }
        <Button type="primary" onClick={this.handleAddField}>添加</Button>
      </div>
    )
  }
}

export default DynamicField