## React
构建用户界面 组件
一切皆组件
yarn add create-react-app -g

## ReactDOM
把react组件 渲染到页面

- App commentLists = []  所有的评论
  - CommentInput  { userName, comment }
  - CommentList   []  props => commentLists

## React和Vue的区别
- 监听数据变化的实现原理不同 这是因为Vue和React在设计理念上的不同 Vue使用的是可变数据 React强调的是数据的不可变
> Vue 通过 getter/setter 以及一些函数的劫持，能精确知道数据变化，不需要特别的优化就能达到很好的性能

> React 默认是通过比较引用的方式进行的，如果不优化（PureComponent/shouldComponentUpdate）可能导致大量不必要的VDOM的重新渲染

- 数据流
> Vue可以set/get 和Object.defineProperty 来用数据劫持来实现数据的双向绑定
> React从设计之初就不支持双向数据绑定

- 模板语法不同
> React jsx
> Vue 扩展HTML

- Redux Vuex

1. 在 Vuex 中，$store 被直接注入到了组件实例中，因此可以比较灵活的使用
使用 dispatch 和 commit 提交更新

通过 mapState 或者直接通过 this.$store 来读取数据
2.  

## 对比React和Vue组件化
1. 什么是模块化： 从代码角度分析问题 把我们编程时候的业务逻辑 分割到不同的模块中来开发 这样能够方便代码的重用
2. 什么是组件化： 从UI的角度分析问题 把一个页面 拆分未一些互不相干的小组件 随着我们项目的开发 我们手里的组件越来越多 最后 如果要实现一个页面 可能直接把现有的组件拿过来复用就可以快速得到一个完整的页面 这样方便了UI元素重用 组件是元素的集合体
3. VUE是如何实现组件化的  .vue 组件模板文件 浏览器不识别这样的.vue文件 所以 在运行前 预编译成真正的组件 
 template UI结构
 script 业务逻辑和数据
 style  UI样式
4. React如何实现组件化  在React里没有像.vue一样的模板文件，而是 直接使用JS代码的形式 取创建你想要的组件
  React中的组件都是直接在js文件中定义的
  React中的组件并没有把一个组件拆分为3部分 而是全部使用JS来实现一个组件的 也就是说 结构 样式 业务逻辑 是混合在JS里一起编写出来的

## 移动APP开发体验方面
- Vue 结合Weex这门技术 提供了迁移到移动端App开发的体验(Weex，目前只是一个小东西 并没有很成功的大案例)
- React 结合ReactNative 也提供了无缝迁移到移动App的开发体验(RN用的最多 也是最火最流行)

## 虚拟DOM
为了实现页面中 DOM元素的高效更新
按需更新 获取内存中新旧两颗DOM树 进行对比 得到需要更新的DOM 元素
程序员用JS对象手动模拟的这两颗DOM树 就是React中虚拟DOM的概念
本质：用JS对象 模拟DOM元素和嵌套关系 
目的：为了实现页面元素的高效更新
## diff算法
- tree diff 新旧DOM 逐层对比
- component diff 每一层中组件级别的对比
- element diff 组件类型相同 进行元素对比
## jsx html
var child1 = React.createElement('li', null, 'JSPang.com');
var child2 = React.createElement('li', null, 'I love React');
var root = React.createElement('ul', { className: 'my-list' }, child1, child2);
<ul className="my-list">
    <li>JSPang.com</li>
    <li>I love React</li>
</ul>

## 状态管理  
redux
mobx

应用的状态放在全局的位置
定制了一套更改数据的流程  难

## action
js 对象
要干什么  type: 'INCREMENT'
传递数据

## Reducer
是个函数 负责更新 store 

## store 
存数据的地方

## class 关键字
每一个class中都有一个隐形的构造器，如果我们手动定义构造器constructor会把默认的给覆盖掉
class的{}内部只能写构造器 静态方法静态属性和实例方法
class 关键字内部 还是用原来的配方实现的 所以class关键字只是JS语法糖

### 静态属性
通过构造函数 直接访问到的属性叫做静态属性， 是直接挂载到构造函数，而没有通过this.
class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  // 静态属性 在class内部，通过static修饰的属性
  static info = "abc"

}

### 实例属性
const a1 = new Animal("lee", 8)
a1.name = 
a1.age = 
通过new出来的实例，访问到的属性叫做实例属性


### 实例方法
普通构造函数里面：
Object.prototype.func = function(){}
class里面：
在class里直接定义方法 是挂载到原型对象上
这是实例方法

### 静态方法
静态方法也是
普通构造函数：
Object.func = function () {}
class里面
在方法前面添加static(用的不多)
static func() {}

一个子类通过extends继承了父类，那么，在子类的构造器中要调用一下super(), 他是父类构造器的一个引用
super()

## react中CSS的模块化方式
在webpack.config.js配置css loader
{test: /\.css/, use: {'style-loader', 'css-loader?modules' } } //为.css后缀名的样式表启用CSS模块化 
在需要的组件中， import导入样式表，并接受模块化的CSS样式对象
import cssObj from './obj.css'
在需要的标签上 使用className指定模块化的样式
<h1 className={cssObj.title}>111</h1>
还可以使用local
具体参考https://www.bilibili.com/video/av37668737/?p=44

## react 哲学
- 如何确定应该将哪些部分划分到一个组件中呢？你可以将组件当作一种函数或者是对象来考虑，根据单一功能原则来判定组件的范围。也就是说，一个组件原则上只能负责一个功能。如果它需要负责更多的功能，这时候就应该考虑将它拆分成更小的组件。
- 最好将渲染 UI 和添加交互这两个过程分开。这是因为，编写一个应用的静态版本时，往往要编写大量代码，而不需要考虑太多交互细节；添加交互功能时则要考虑大量细节，而不需要编写太多代码。所以，将这两个过程分开进行更为合适。
- 在构建应用的静态版本时，我们需要创建一些会重用其他组件的组件，然后通过 props 传入所需的数据。props 是父 组件向子组件传递数据的方式。即使你已经熟悉了 state 的概念，也完全不应该使用 state 构建静态版本。state 代表了随时间会产生变化的数据，应当仅在实现交互时使用。所以构建应用的静态版本时，你不会用到它。
- 你可以自上而下或者自下而上构建应用：自上而下意味着首先编写层级较高的组件（比如 FilterableProductTable），自下而上意味着从最基本的组件开始编写（比如 ProductRow）。当你的应用比较简单时，使用自上而下的方式更方便；对于较为大型的项目来说，自下而上地构建，并同时为低层组件编写测试是更加简单的方式。
- 为了正确地构建应用，你首先需要找出应用所需的 state 的最小表示，并根据需要计算出其他所有数据。其中的关键正是 DRY: Don’t Repeat Yourself。只保留应用所需的可变 state 的最小集合，其他数据均由它们计算产生。比如，你要编写一个任务清单应用，你只需要保存一个包含所有事项的数组，而无需额外保存一个单独的 state 变量（用于存储任务个数）。当你需要展示任务个数时，只需要利用该数组的 length 属性即可。
- 对于应用中的每一个 state：
1. 找到根据这个 state 进行渲染的所有组件。
2. 找到他们的共同所有者（common owner）组件（在组件层级上高于所有需要该 state 的组件）。
3. 该共同所有者组件或者比它层级更高的组件应该拥有该 state。
4. 如果你找不到一个合适的位置来存放该 state，就可以直接创建一个新的组件来存放该 state，并将这一新组件置于高于共同所有者组件层级的位置。

## webpack 打包优化
entry: {
    app: './index.tsx',
    appStyles: './css/site.css',
    `代码分离 react react-dom 等框架不会变  单独打包`
    vendor: [
      'react',
      'react-dom'
    ],
    vendorStyles: [
      '../node_modules/bootstrap/dist/css/bootstrap.css'
    ]
  },

## hoc(高阶组件)
high order component
高阶函数
接受一个函数作为参数，返回一个函数
接受一个函数作为组件，返回一个组件

## 组件

yarn eject
可以暴露出webpack配置文件

## onClick
  `<button onClick={() => {this.handleADD()}}>添加</button>`
  onClick里面是否需要用回调方式包装
  需要看里面的函数是否是带() 即已经执行函数
  如果带()  需要回调包装
  没有 则可以省略

## jsonp
export const OPTION = {
  param: 'jsonpCallback',
  prefix: 'callback'
}
?jsonpCallback=xxx
xxx可固定
json jquery
每次请求的callback xxx都是不一样的 加上随机值
callback_1
callback_2
prefix: 'callback'


## react-redux
`https://juejin.im/post/5af00705f265da0ba60fb844`
`https://images2015.cnblogs.com/blog/593627/201604/593627-20160418100241038-376047870.png`

## React-Router

- Router
1. Router是一个外层，最后render的是它的子组件，不渲染具体业务组件。
2. Router的props中有一个history的对象，history是对window.history的封装，history的负责管理与浏览器历史记录的交互和哪种方式的单页应用。history会作为childContext里的一个属性传下去。
this.props.history this.props.match
match是Route组件里匹配url后的结果

- Route
1. 负责渲染具体的业务组件，负责匹配url和对应的组件
2. 有三种渲染的组件的方式：component(对应的组件)、render(是一个函数，函数里渲染组件)、children(无论哪种路由都会渲染)
3. Route的props有一个exact属性。如果是true，匹配时到path结束，要和location.pathname准确匹配。
4. path是声明在Route上的路径规则，当某个路径符合这个规则时，显示路由处理组件。
url是满足path规则的某个具体的url。 `path和url区别`  path: "/detail/:id" url: "/detail/2"

- Switch
1. 匹配到一个Route子组件就返回不再继续匹配其他组件
2. Switch可以套在Route的外面，匹配到了一个Route，就不再往下匹配

- Link
1. Link的属性to是字符串或对象。
2. Link渲染a标签，在a标签上绑定事件，进行跳转。
3. Link的跳转是用history.push完成的，a的href属性是history.createHref的返回值。

pushState() 需要三个参数: 一个状态对象, 一个标题 (目前被忽略), 和 (可选的) 一个URL. 让我们来解释下这三个参数详细内容

## 纯函数
function(a, b) {
  return a + b          => 纯函数 因为该函数不会尝试改变入参 且多次调用下相同的入参始终返回相同的结果。
}

function(account, amount) {
  account.total -= amount   => 非纯函数 因为它更改了自己的入参
}


## State Props
`所有 React 组件都必须像纯函数一样保护它们的 props 不被更改`
https://overreacted.io/zh-hans/why-do-we-write-super-props/
this.props 和 this.state 是 React 本身设置的，且都拥有特殊的含义，但是其实你可以向 class 中随意添加不参与数据流（比如计时器 ID）的额外字段.

`正确地使用State`
1. 不要直接修改state 例如，此代码不会重新渲染组件
// Wrong
this.state.comment = 'Hello';
// Correct
this.setState({comment: 'Hello'});
构造函数是唯一可以给 this.state 赋值的地方：
2. State 的更新可能是异步的
出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用
因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态
例如，此代码可能会无法更新计数器：
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
`// Correct` `!important`
`this.setState((state, props) => ({
  counter: state.counter + props.increment
}))
3. State 的更新会被合并
当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state。
4. 数据是向下流动的
不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。

这就是为什么称 state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问。
这通常会被叫做“自上而下”或是“单向”的数据流。任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。

如果你把一个以组件构成的树想象成一个 props 的数据瀑布的话，那么每一个组件的 state 就像是在任意一点上给瀑布增加额外的水源，但是它只能向下流动。

## 条件渲染
通过if之类控制渲染对象
###  与运算符 &&
通过花括号包裹代码，你可以在 JSX 中嵌入任何表达式。这也包括 JavaScript 中的逻辑与 (&&) 运算符。它可以很方便地进行元素的条件渲染。
{unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
}
`三元运算符`

`阻止组件渲染`
在极少数情况下，你可能希望能隐藏组件，即使它已经被其他组件渲染。若要完成此操作，你可以让 render 方法直接返回 null，而不进行任何渲染
## key 
key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识
当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key：

## this.setState
- React作为View层，通过改变data从而引发UI的更新。React不像Vue这种MVVM库，直接修改data并不能视图的改变，更新状态(state)的过程必须使用setState。

- setState的函数签名：
setState(partialState,callback)

setState接受两个参数，一个是partialState，它是新的state用来更新之前的state。callback作为回调函数，会在更新结束之后执行


setState用来设置state的子集，永远都只使用setState更改state。你应该将this.state视为不可变数据。
并不能保证this.state会被立即更新，因此在调用这个方法之后访问this.state可能会得到的是之前的值。
不能保证调用setState之后会同步运行，因为它们可能被批量更新，你可以提供可选的回调函数，在setState真正地完成了之后，回调函数将会被执行。

`https://juejin.im/post/599b8f066fb9a0247637d61b`
// 一般改变state值的一种方式
const { data } = this.state;
this.setState({ data: {...data, key: 1 } });
// 另外一种可以通过callback的方式改变state的值
this.setState(({ data }) => ({ data: {...data, key: 1 } }));
// 还可以
this.setState((state, props) => {
return { counter: state.counter + props.step };
});
## this.setState遇到的坑
currentCount = (count) => {
    this.setState({
      eachCount: count
    })
    // this.setState是异步操作
    console.log('goodincart',count)
    // 所以这样操作的话 提交出去的值还是上一次的值 
    // this.props.changeCount(this.state.eachCount, this.props.id)
    this.props.changeCount(count, this.props.id)

  }
  // 在网易严选项目里的购物车里的stepper


## MVVM   Vue 和 React 的区别

1. React作为View层，通过改变data从而引发UI的更新。React不像Vue这种MVVM库，直接修改data并不能视图的改变，更新状态(state)的过程必须使用setState。
