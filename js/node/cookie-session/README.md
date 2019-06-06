## 存在的意义
http 是无状态的
在客户端和服务器上做操作，使得再次请求的时候 知道客户端是谁

## -S
--save
放在 "dependencies": {}
npm i
在json文件里面寻找各个依赖并安装

## cookie
存在客户端：
js 操作:
document.cookie
后端：响应头
Set-Cookie: name1=value1; path=/; httponly

浏览器检查所有存储的cookie 把符合当前作用范围的cookie 放在http请求头 发给服务器
cookie 有可能被用户禁用

内容：
name:
value:
path: 规定cookie生效的路径

/                 匹配所有路径
/user             /user 以及 /user/xxx
/user/xxx         /user/xxx 以及下面的 /user/xxx/xx

## httponly
true / false
默认为true 就不能通过Js获取cookie
max-age: 在几秒后过期
作用范围: 
path
domain(域名)
用途： 会话状态管理，保存用户的个性化设计

## session
他是保存在服务端的
靠后台语言实现
有很多个session
很多个用户  sessionID

## koa 第三方中间件
ctx req + res
ctx: {
  req,
  res
}
koa-views ejs
往 ctx 上面扩展  80%
ctx: {
  req,
  res,
  render: () => {
    
  }
}

## localStorage SessionStorage cookie session