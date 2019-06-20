## 挂载阶段
第一次渲染
componentWillMount
render()
componentDidMount

## 更新阶段

shouleComponentUpdate
true 更新
false 不更新

componentWillUnmount
在这里 清理定时器 事件绑定等

15.xx https://raw.githubusercontent.com/shunwuyu/lesson_md/master/react/life-cycle/src/old.png?tdsourcetag=s_pctim_aiomsg

16.xx https://raw.githubusercontent.com/shunwuyu/lesson_md/master/react/life-cycle/src/new.jpg?tdsourcetag=s_pctim_aiomsg

## red blue 主题
// parent state
{
  theme: 'red'
}
层层传递
父组件 -> 子 -> 孙

1. 父组件 通过 getChildContext 返回提供的context 内容
2. 父组件 .childContextTypes 定义提供的context 类型
3. 子组件 获取 .contextTypes 定义接受的类型 this.context 获取

问题、： 跨层级传递的时候 加入中间某一组件 shouldComponentUpdate return false 之后
导致 后代不会更新 context 的数据 不能同步

16.xx.xx
1. 构造Provider Consumer
2. 父组件 <Provider value={} /> 提供数据
3. 后代组件<Consumer> {() => {}} </Consumer>  获取数据

state = {
  theme: 'purple',
  toggle: this.handleToggletheme
}
静态属性 无法获取  实例的  this