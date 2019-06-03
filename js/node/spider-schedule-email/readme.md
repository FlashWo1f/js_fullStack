1. npm init -y
2. create spider.js
3. yarn add superagent -S
https://tianqi.moji.com/weather/china
https://tianqi.moji.com/weather/china/beijing/chaoyang-district
superagent相当于request

## $
x.find() 查找 x 元素下面的内容$('.box').find('p')
查找X下面的P标签
\s 空白字符
replace(/\s/g, ""); 去除空白的字符

http://wufazhuce.com/

##  promise 
promise.all([promise组成的数组])
返回一个promise
所有promise resolve 的时候 他才resolve
resolve 时候的值就是 [所有promise] resolve 组成的数组

## 模板引擎
发送漂亮的邮件  需要发送html
html 不是静态的  需要数据填充
{{name}}
{name} 变量 编译进去
模板引擎 同理
编译成 html

MVC
jsp
node 模板引擎 承载页面(view)
ejs jade
<%= %> 变量
<% %> js执行