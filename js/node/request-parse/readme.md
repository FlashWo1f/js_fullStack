##响应头
Content-Type: 告诉浏览器 返回的东西是什么类型
类型：text/plain(字符串) text/html ... image/jpg mime

## get 请求
? query=''%type=''&a=''
1. url.parse() query
2. queryString

## 请求头
Content-Type: 告诉后台  发送数据的格式
post 请求格式1：application/x-www-form-urlencoded  form 表单默认编码
post 请求格式2：application/json 交换数据

区别： 1是表单编码格式 2是JSON  发给后端

- 获取：
    req.headers['content-type']
- 获取请求方式
    req.method
- url
    req.url

## createServer
http服务默认8080 listen 指定另外一个端口