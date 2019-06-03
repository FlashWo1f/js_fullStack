const Koa =  require('koa')
const path = require('path');
const views = require('koa-views')
const app = new Koa()
// ejs 提供了转html 的中间件
// 模版引擎在哪个位置
app.use(
  views(
    path.join(__dirname, './view'), {
      extension: 'ejs'
    }
  )
)
const user = {
  // 把数据渲染到user.ejs模板上👇
  name: 'AJ',
  post: [
    {id: 0, title: '流动的SVG'},
    {id: 1, title: 'vue.js系列'}
  ]
}
const posts = [
  {
    id: 0,
    content: '用SVG + CSS 实现'
  }, 
  {
    id: 1,
    content: '<strong>react 表示不服</strong>'
  }
]
app.use(async (ctx) => {
  // req res
  //  /user 用户的主页
  // req.url 解析出请求的地址
  if (ctx.path === '/user') {
    // user ejs 模板引擎
    // 把数据渲染到user.ejs模板上
    await ctx.render('user', {
      user
    })
  }else if(ctx.path === '/post'){
    // get 请求的 查询参数 ?name=a&age=b {name:  age:}
    const { id } = ctx.query
    const post = posts.find(item => item.id == id)
    await ctx.render('post', { post })
  }
  else{
    ctx.body = '无法处理该路径' + ctx.request.url
  }
})
// .listen 就是 原生http .listen
app.listen(8080, () => {
  console.log('server is running 8080')
})