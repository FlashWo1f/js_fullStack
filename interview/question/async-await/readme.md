## 异步
callback  =>  promise  =>  generate  =>  async/await

async 函数就是Generator 函数的语法糖

## co 
author: TJ


## for in 
for...of语句在可迭代对象
变成可迭代对象， 一个对象必须实现 @@iterator 方法, 意思是这个对象（或者它原型链 prototype chain 上的某个对象）必须有一个名字是 Symbol.iterator 的属性:

##promise相当于一个状态机
pending
fulfilled
rejected
(1) promise 对象初始化状态为 pending

(2) 当调用resolve(成功)，会由pending => fulfilled

(3) 当调用reject(失败)，会由pending => rejected
注意promsie状态 只能由 pending => fulfilled/rejected, 一旦修改就不能再变
`then`
// onFulfilled 是用来接收promise成功的值
// onRejected 是用来接收promise失败的原因
promise.then(onFulfilled, onRejected);

1.  resolve(成功) onFulfilled会被调用
const promise = new Promise((resolve, reject) => {
   resolve('fulfilled'); // 状态由 pending => fulfilled
});
promise.then(result => { // onFulfilled
    console.log(result); // 'fulfilled' 
}, reason => { // onRejected 不会被调用
    
})
2. reject(失败) onRejected会被调用
const promise = new Promise((resolve, reject) => {
   reject('rejected'); // 状态由 pending => rejected
});
promise.then(result => { // onFulfilled 不会被调用
  
}, reason => { // onRejected 
    console.log(reason); // 'rejected'
})
`catch`
 promise.catch

在链式写法中可以捕获前面then中发送的异常,
promise.catch(onRejected)
相当于
promise.then(null, onRrejected);

`静态方法`
Promise.resolve 返回一个fulfilled状态的promise对象
Promise.reject 返回一个rejected状态的promise对象
Promise.all 接收一个promise对象数组为参数
只有全部为resolve才会调用 通常会用来处理 多个并行异步操作