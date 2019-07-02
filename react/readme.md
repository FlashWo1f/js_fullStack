## React
构建用户界面 组件
一切皆组件
yarn add create-react-app -g

## ReactDOM
把react组件 渲染到页面

- App commentLists = []  所有的评论
  - CommentInput  { userName, comment }
  - CommentList   []  props => commentLists

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
- React 结合ReactNative 也提供了无缝迁移到移动App的开发体验(RN用的最多 也是最或最流行)

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
在需要的标签上 使用className指定木块话的样式
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