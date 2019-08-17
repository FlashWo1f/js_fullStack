## node中重要的模块

- 事件驱动events
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('')
详情见node/event/event.js

- 读写文件fs
const fs = require('fs');
const fileAPromise = new Promise((resolve, reject) => {
    // 把耗时的任务放进来
    fs.readFile('./a.txt', 'utf8', (err, data) => {
        //流程的控权怎么交接
        if(data){
            resolve(data)
        }else{
            reject(err)
        }
    })
})

- http
const http = require('http')
let i = 0
http
    .createServer(function(require, response){
    response.end(`Hello World!${++i}`)
    })
    .listen(3000)

## koa
## 中间件 middleWare
流水线
一个中间件处理完  可以交给下一个中间件
koa 特色
是一个async方法

洋葱模型
作用： 解耦 一个中间件做一件事