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