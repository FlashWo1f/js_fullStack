## 跨域
浏览器的安全策略
协议 域名 端口 有一个不一致的时候就存在跨域
https://www.abc.com/a
https://www.abc.com/b  这两个不存在跨域

## cors
cross origin resource share
1. 一个标准，规定了一些 http的首部字段， 让服务器允许那些网站可以访问
2. 规定，如果是非简单请求，浏览器会先发一个预检请求，从服务端知道是否跨域，如果允许才会发出正式的请求
3. 简单和非简单请求

## jsonp 原理
1. script 标签 可以跨域 example: 平时引入的CDN的包
2. 加载进来的内容会被当作JS执行
3. 后端先获取到前端发出的callback 在callback里 插入自己想要返回的内容
4. 前端拿到返回的内容当作JS 执行
`getUser(
  {
    name: 'abc',
    age: 18
  }
)`
5. 预先定义好一个函数 然后执行到请求回来的内容即被执行
6. 缺点：只能 get 请求
7. 写一个promise 风格的jsonp函数
param = {type: 'man', age: 18}
jsonp(url, param = {})
.then(res => {
  console.log(res)
})
1. 一个全局的方法
2. 插入一个script 标签， 根据方法名 param 拼接url
3. 根据js的加载情况 判断 请求成功与否 返回数据
4. Script 标签上面有事件

## iframe
可以引入一个跨域的html文件

1. 引入和后端接口同源的一个iframe
2. 该iframe不存在跨域 可以请求
3. 和iframe通信postMessage message

<!-- iframe 的onload 会计入window.parent 之中 -->

## 
同一个页面的里面的 所有 iframe共享 window.name


## server 后端
koa-static 映射过 /url
## static 前端
static live-server
前后端 通信 fe-iframe 文件 收到后端的结果  
middle  后端static iframe 嵌套在fe-iframe里

## window.name
1. 上一步一样
2. iframe 请求  结果放在一个共享的 window.name
3. 让用户看到的fe-ifeame.html得到请求的结果
4. 请求完成之后 跳到第三方页面  执行定义在fe-iframe.html 里面的回调

## webpack-dev-server
反向代理
live-server --proxy=/api:http://localhost:3000/api/
live-server --proxy=/api:http://localhost:9090/api/
live-server --proxy=/api:http://localhost:7070/api/
拿到结果
对于客户端来说 最终请求的地方是未知的

正向代理
对于服务端来说 客户端是未知的