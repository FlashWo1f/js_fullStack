应用底层 HTTP协议
状态码：  HTTP响应(response)中包含状态码

服务器告诉浏览器  代理 proxy
1xx  请求正在处理  继续等待
2xx  请求已经成功处理   200   OK
3xx  重定向  Location
4xx  用户出现的错误(地址错了)  未授权限  404 not found
5xx  服务器端出现错误


301  永久跳转
用户  www.xiaomi.com  =>  www.mi.com
告诉蜘蛛
www.xiaomi.com/a.html 废弃了
告诉浏览器301  www.mi.com/a.html 重定向
3xx  区别  永久跳转  告诉蜘蛛把记录更新掉
301  可以在改变状态码  不变  来展示理解 浏览器会永久记住 除非清除缓存
localhost:3000 301 永久跳转
再次访问  浏览器有缓存  不需要再走服务器
302  临时跳转  不会告知蜘蛛 或在前端缓存