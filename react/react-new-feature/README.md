## concurrent

让 react 的
JS 单线程
浏览器 多线程
1. ui 线程
2. js 线程
3. 事件
4. http
JS 线程和 UI 线程是互斥的 因为 JS可以操作DOM

## Hook

Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数。Hook 不能在 class 组件中使用 —— 这使得你不使用 class 也能使用 React。（我们不推荐把你已有的组件全部重写，但是你可以在新组件里开始使用 Hook。）
只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用

### useState 
它会返回一对值：当前状态和一个改变该状态的函数
const [count, setCount] = useState(0);
参数0就是count的初始值，也是usrState的唯一参数

## useEffect
React会在每次渲染后调用副作用函数--包括在第一次渲染的时候
可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合