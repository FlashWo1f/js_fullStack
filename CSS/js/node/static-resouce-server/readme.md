## 静态资源
不会随着服务运行而改变：html css js 图片
1. 如果有index.html 打开
2. 否则列出所有文件
3. 请求路径 和磁盘路径 一一映射

请求：
/static/*.*  磁盘位置static  一一对应
1. 拿到req.url
2. 读取 磁盘下面同一个位置 返回
3. 静态资源 通常会放在某一个目录下面 /static/ 所以请求都以某个目录开头 ^

## 打开方式
file:// 本地文件读取协议 ./xx.png  双击资源管理器中可以显示
而在服务器中 http://localhost:8080/ http 协议
html 里面引入的资源  都会发出请求

## 上传图片
### formidable
处理请求的
fields 非input[type="file"]的提交项
files    input[type="file"]的提交项
根据input 的name 属性来获取值 