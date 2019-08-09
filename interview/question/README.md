# q1  =>  JS全局执行为我们创建了两个东西:全局对象 && this关键字
  new 的实现原理:
    1. 创建一个空对象，构造函数中的this指向这个空对象
    2. 这个新对象被执行[原型]连接
    3. 执行这个构造函数，属性和方法添加到this引用的对象中
    4. 如果构造函数没有返回其他对象 那么就返回这个this 即创建的新对象 否则 返回构造函数中返回的对象

## q2

## q3 深拷贝和浅拷贝

## q4 闭包
- 有权限访问其他函数作用域的函数称之为闭包
1. 创建闭包最常见方式，就是在一个函数内部创建另一个函数。
2. 函数的作用域及其所有变量都会在函数执行结束后被销毁。但是，在创建了一个闭包以后，这个函数的作用域就会一直保存到闭包不存在为止。
3. `https://segmentfault.com/a/1190000006875662`

### 隐式原型 和 显式原型
function Person(name) {
  this.name = name
}
let p = new Person('sa')

p.__proto__ = Person.prototype
Person.__proto__ = Function.prototype
Function.__proto__ = Object.prototype

### 构造函数本不需要返回值   如果返回值为对象则被覆盖 如果返回值不为对象  则这条返回值则被忽略
function Person(name) {
  this.name = name
//  return {}
  return 666
}
var p = new Person('pl')
console.log(p)


## 类的创建与继承
`https://juejin.im/post/58f94c9bb123db411953691b`

## click 在IOS手机上有300ms 延迟  原因及解决方法

原因:在300ms之内 点击两次 放大页面   点击一次  点击事件
解决方法:
1. <meta name="viewport" content="width=device-width, initial-scale=1.0"> `1.0` => `no`
2. fastClick  原理: 检测到touchend事件后， 立刻发出模拟click事件， 并把浏览器300ms之后真实发出的事件阻断

## cookie localStorage sessionStorage

cookie: 数据始终在同源的http请求中携带(即使不需要)，即cookie在浏览器和服务器间来回传递
        而localStorage sessionStorage不会自动把数据发给服务器 仅在本地保存
        cookie数据还有路径(path)的概念，可以限制。cookie只属于某个路径下
        存储大小限制也不同，cookie数据不能超过4K，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如回话标识

数据的有效期不同sessionStorage:
      仅在当前的浏览器窗口关闭有效, 不能长期保存;
localStorage:
      始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据;
cookie:
      只在设置的cookie过期时间之前一直有效，即使窗口和浏览器关闭

作用域不同sessionStorage:
      不在不同的浏览器窗口中共享，即使是同一个页面;
      localStorage:在所有同源窗口都是共享的 5M或更大;
      cookie:也是在所有同源窗口中共享的