- MVVM  前端新贵
Model 数据  Page({data: {
    legends:[]
}})
View 视图
WXML
VM  {{}}  => 表示编译
    wx.for  ...

- MVC  经典的WEB开发模式
    Model   =>  SQL
    View    =>  静态页面
    Controller  =>  路由

- WebServer 软件(程序)
Web服务器硬件运行WebServer
ip http协议
http://127.0.0.1:3000
端口 不止一个服务
3306 MYSQL
80 WEB服务
http
    .createServer(function(request, response){
        response.end('hello WORLD');
    })
    .listen(3000)

request 用户  N Web Server 一直在 3000端口号上
request 就能找到， 每位用户到达触发事件， 调用createServer 回调函数
得到request用户身份
response 相应请求  http 相应后断开