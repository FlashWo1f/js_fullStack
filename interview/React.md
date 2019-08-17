## React中重要概念  再读React文档  

### JSX
 JSX，是一个 JavaScript 的语法扩展
 JSX 可以生成 React “元素”
 JSX 防止注入攻击
### Props
“纯函数”，因为该函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果。
Props只读性
严格规则
所有 React 组件都必须像纯函数一样保护它们的 props 不被更改

### React生命周期
在具有许多组件的应用程序中，当组件被销毁时释放所占用的资源是非常重要的。

当 Clock 组件第一次被渲染到 DOM 中的时候，就为其设置一个计时器。这在 React 中被称为“挂载（mount）”。

同时，当 DOM 中 Clock 组件被删除的时候，应该清除计时器。这在 React 中被称为“卸载（unmount）”

componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行，所以，最好在这里设置计时器

我们会在 componentWillUnmount() 生命周期方法中清除计时器

尽管 this.props 和 this.state 是 React 本身设置的，且都拥有特殊的含义，但是其实你可以向 class 中随意添加不参与数据流（比如计时器 ID）的额外字段

### React this.setState()
见React文件夹的README.MD

### React 事件处理
- React 事件的命名采用小驼峰式（camelCase），而不是纯小写。

- 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault

### React 条件渲染
if else
与运算符 &&
三元运算符

### React 列表 key

key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识
一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用来自数据 id 来作为元素的 key
当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key
如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。
`元素的 key 只有放在就近的数组上下文中才有意义`

const listItems = numbers.map((number) =>
    // 正确！key 应该在数组的上下文中被指定
    <ListItem key={number.toString()}
              value={number} />

  );
### React 代码分割 Suspense React.lazy

### React Context
Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法
const ThemeContext = React.createContext('light');
<ThemeContext.Provider value="dark">
        <Toolbar />
</ThemeContext.Provider>
class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
- 使用之前考虑
Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。请谨慎使用，因为这会使得组件的复用性变差
如果你只是想避免层层传递一些属性，组件组合（component composition）有时候是一个比 context 更好的解决方案。
一种无需 context 的解决方案是将 Avatar 组件自身传递下去，因而中间组件无需知道 user 或者 avatarSize 等 props
- API
 > React.createContext   const MyContext = React.createContext(defaultValue)
 创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值 找不到就会用defaultValue

 > Context.Provider     Provider 接收一个 value 属性，传递给消费组件  当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新

 > Context.Consumer

### React 错误边界 R16新增

错误边界是一种 React 组件，这种组件可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI，而不是渲染那些崩溃了的子组件树。错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误

### React Refs

### React Router
- React Router 是一个基于React之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与URL间的同步
exact 精准匹配

constructor() 里面装的属性  比如说ref  this.ref 我们可以在构造函数里面赋初始值(没有也行)
Ref 


## Redux

但是当我们需要在项目中增加乘法/除法/幂等等复杂操作时，就需要设计多个state来控制views的改变，当项目变大，里面包含状态过多时，代码就变得难以维护并且state的变化不可预测。可能需要增加一个小功能时，就会引起多处改变，导致开发效率降低，代码可读性不高。
传统 View 和 Model ：一个 view 可能和多个 model 相关，一个 model 也可能和多个 view 相关，项目复杂后代码耦合度太高，难以维护。

-  背景：
传统 View 和 Model ：一个 view 可能和多个 model 相关，一个 model 也可能和多个 view 相关，项目复杂后代码耦合度太高，难以维护。
redux 应运而生，redux 中核心概念reducer，将所有复杂的 state 集中管理，view 层用户的操作不能直接改变 state从而将view 和 data 解耦。redux 把传统MVC中的 controller 拆分为action和reducer

- 设计思想：
（1）Web 应用是一个状态机，视图与状态是一一对应的。

（2）所有的状态，保存在一个对象里面。

Redux 让应用的状态变化变得可预测。如果想改变应用的状态，就必须 dispatch 对应的 action。而不能直接改变应用的状态，因为保存这些状态的地方（称为 store）只有 get方法（getState） 而没有 set方法
只要Redux 订阅(subscribe)相应框架(例如React)内部方法，就可以使用该应用框架保证数据流动的一致性。

- Action creater
  只能通过dispatch action 来改变state 这是唯一的方法
  action通常的形式是action= {type: '', payload: ''} 里面一定有一个type的属性
  在dispatch任何一个 action 时将所有订阅的监听器都执行，通知它们有state的更新
    var listeners = currentListeners = nextListeners //更新currentListeners  
    for (var i = 0; i < listeners.length; i++) { //触发所有已订阅的listener，通知其消息  
        listeners[i]()
    }

- Store
  Redux中只有一个store，store中保存应用的所有状态；判断需要更改的状态分配给reducer去处理。
  可以有多个reducer，每个reducer去负责一小部分功能，最终将多个reducer合并为一个根reducer
  作用：
    1. 维持state树；
    2. 提供 getState() 方法获取 state；
    3. 提供 dispatch(action) 方法更新 state；
    4. 通过 subscribe(listener) 注册监听器。

- Reducer
  store想要知道一个action触发后如何改变状态，会执行reducer。reducer是纯函数，根reducer拆分为多个小reducer ，每个reducer去处理与自身相关的state更新

  注：不直接修改整个应用的状态树，而是将状态树的每一部分进行拷贝并修改拷贝后的变量，然后将这些部分重新组合成一颗新的状态树。应用了数据不可变性（immutable），易于追踪数据改变。此外，还可以增加例如撤销操作等功能。  那么问题来了  如何去撤销操作呢？

- View
  分为容器型组件 Container component 和展示型组件 Presentational component
  建议是只在最顶层组件（如路由操作）里使用 Redux。其余内部组件仅仅是展示性的，所有数据都通过 props 传入。