// sleep(1000)
// console.log('hello')

const sleep = time => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time)   // 不能resolve()
  })
}
sleep(1500)
  .then(() => {
    console.log('sss')
  })

function *sleepGener(time) {
  yield new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })
  console.log('aaa')
}

sleepGener(1000)
  .next()
  .value
  .then(() => {
    console.log('bbb')
  })


  /**
   * 
   * 首先Promise 是JS用来处理异步问题的  它是一个对象 通常使用是new一个Promise实例 Promise接受一个函数作为参数
   * 这个函数参数接受两个回调函数  一个是resolve 一个是reject 
   * promise有三个状态 pending resolved rejected 当异步操作成功之后 从pending到resolve 操作失败之后 从pending到rejected
   * 状态一旦改变便不可回溯 promise 创建即执行
   * 再来聊聊Promise 的方法
   * 首先最常见的就是Promise.then 他也接受两个回调函数 第一个回调函数 用来接受Promise成功的回调函数
   * 第二个回调函数用来接受失败的回调函数 第二个回调函数可以省略 
   * 。then'方法返回的也是一个Promise实例 所以这样可以链式的去调用  相比之前的回调函数解决异步的话 有后期好维护代码 代码清晰等好处
   * 他可以完全被另一个Promise方法.catch所取代
   * 。catch方法是。then(null, reject)的别名
   * 之所以catch能替代then的第二个回调函数 是因为他又then的第二个回调函数的捕获错误的功能
   * 还可以捕获promise再执行代码过程种抛出的错误
   * promsie抛出的错误又冒泡的机制
   * catch 方法能捕获到前面所有的then方法抛出的错误
   * all方法  他接受一个promise实例的数组
   * p1 p2 p3 如果里面有不是实例的成员  就用Promsie。resolve把它变成一个Pormise实例
   * 他的运行机制是这样的
   * 只有当数组种的每个Promise状态都变成RESOLVE promise。all状态才能变成resolve 他能接受所有实例种成功resolve出来的东西
   * 如果数组种的实例有一个的状态变成了reject 那么他的状态就会变成reject 并把第一个变成reject的结果返回出去
   * 还有就是race方法
   * 他接受的参数也是跟all一样 也是接受一个Promsie实例组成的数组
   * 就是执行机制不太一样  执行机制就如同他的字面意思 race 谁的状态先变化  那么race的状态就变成先改变的哪个
   * 。fnally方法  无论无何都会执行的一个方法
   * done方法 就是在。catch方法种  catch能铺货到前面的所有错误  但是不能保证 catch种不出错误  而done的作用就是弥补这一缺失
   * 
   * 
   */

   /**
    * 执行上下文 
    * 他可以理解为代码执行的环境
    * 而JS执行环境分为三种
    */