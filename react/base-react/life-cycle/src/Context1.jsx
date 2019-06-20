import React from 'react'
// React.createContext返回一个对象 两个组件 
const ThemeContext = React.createContext({
  theme: 'purple',
  toggleTheme: () => {}
})

class MyButton extends React.Component {
  render () {
    return (
      <ThemeContext.Consumer>
        {
          (value) => {
            return (
              <button style={{backgroundColor: value.theme}} onClick={value.handleToggleBule}>
                {this.props.children}
              </button>
            )
          }
        }
      </ThemeContext.Consumer>
    )
  }
}
class Message extends React.Component {
  shouldComponentUpdate(){
    return false
  }
  render() {
    return (
      <div>
        {this.props.text}
        <MyButton>delete</MyButton>
      </div>
    )
  }
}

class Context1 extends React.Component {
  constructor() {
    super();
    this.handleToggleBule = () => {
      this.setState(state => {
        return {
          theme: 'blue'
        }
      })
    }
    this.state = {
      theme: 'purple',
      handleToggleBule: this.handleToggleBule
    }
  }
  // state ={}  是静态的
  handleToggleTheme = () => {
    this.setState({
      theme: 'red'
    })
  }
  // handleToggleBule = () => {
  //   this.setState({
  //     theme: 'blue'
  //   })
  // }
  render() {
    const msgs = ['msg1', 'msg2', 'msg3']
    return (
      <ThemeContext.Provider value={this.state}>
        <button onClick={this.handleToggleTheme}>
        切换主题
        </button>
        {
          msgs.map((msg, i) => {
            return <Message key={i} text={msg} />
          })
        }
        {/* <button onClick={(e) => console.log(e)}>ppp</button> */}
      </ThemeContext.Provider>
    )
  }
}

export default Context1