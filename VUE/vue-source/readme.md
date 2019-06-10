前端路由实现 核心本质是不刷新页面 
但是可以在页面上显示不同的内容 单页应用的本质
用户体验 不用再等页面加载

1. hash 实现
url #hash 部分 的改变   不会刷新页面
传统的URL /path?queryString 都会重刷页面， 页面打开慢
每次一刷新页面都是一次独立的HTTP请求
怎么利用#hash 动态加载组件 及发起请求
js DHTML
hashchange

- 单页应用避免了传统后端路由每次跳转都刷新页面，给用户带来的满， 白屏(多了HTTP请求)  
前端路由  立即加载  路由对应的组件，其中最简单的方式是hashchange
http://localhost:8080#a

- route-link组件
to="#/" props
home slot