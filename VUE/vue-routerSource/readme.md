前端路由实现， 核心本质是 不刷新页面， 但是可以在页面上显示不同的内容 单页应用的本质 提高用户体验 相同的内容不必重复加载 响应变快
1. hash 实现， a 锚链接
url #hash 部分 
hash部分改变， 不会刷新页面， 传统的URL， /path?queryString 重刷页面后果 ,页面打开慢 ,每一次刷新页面都是独立的HTTP请求 
怎么利用它呢？  动态的加载组件，及发起请求 
js DHTML(动态超文本标记语言) 

- 单页应用避免了传统后端路由每次跳转都刷新页面，给用户带来的慢，白屏(多了HTTP请求), 前端路由，立即加载 路由对应的组件, 其中最简单的方式是hashchange hash改变时触发
http://localhost:8080#a 

- route-link组件
to="#/" props
home slot插槽
slot 是对组件的扩展，通过slot插槽向组件内部指定位置传递内容，通过slot可以父子传参


只要“&&”前面是false，无论“&&”后面是true还是false，结果都将返“&&”前面的值;
只要“&&”前面是true，无论“&&”后面是true还是false，结果都将返“&&”后面的值;

var map = {};
map['key1'] = 1;
map['key2@'] = 2;
key value 赋值写法  map[key] = value

render: h => h(App) 是下面内容的缩写：

render (createElement) {
    return createElement(App);
}

render (h){
    return h(App);
}
