import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.styl'

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [
        'get up',
        'coding',
        'sleep'
      ],
      inputVal: ''
    }
  }
  config = {
    navigationBarTitleText: 'taro首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className="list_wrap">
          <Text>Todo list</Text>
          <Input className="input" type="text" value={inputVal} onInput={this.inputHandler}></Input>
          <Text className="add" onClick={this.addItem}>添加</Text>
          {
            list.map((item, index) => {
              return <View>
                <Text>
                  {
                    index + 1
                  }.{ item }
                </Text>
                <Text className="del" onClick={this.delItem.bind(this, index)}>删除</Text>
              </View>
            })
          }
        </View>
      </View>
    )
  }
  inputHandler = (e) => {
    this.inputVal = e.target.value
  }
  addItem = () => {
    let { list } = this.state
    const inputVal = this.inputVal || ''
    if(inputVal.trim() == '') return
    else {
      list.push(inputVal)
    }
    this.setState({
      list,
      inputVal: ''
    })
  }
  delItem = (index) => {
    let { list } = this.state
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}
