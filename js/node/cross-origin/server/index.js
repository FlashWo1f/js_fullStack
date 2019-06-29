const Koa = require('koa');
const app = new Koa()
const koaStatic = require('koa-static');
const path = require('path');
const router = require('koa-router')();

// res.set
app.use(async (ctx, next) => {
  // 允许那个域名请求
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
  // 服务器支持的头部 x-custom
  ctx.set('Access-Control-Allow-Headers', 'x-custom, content-type')
  // 支持的方法
  ctx.set('Access-Control-Allow-Methods', '*')
  // 允许携带COOKIE
  // 设置为允许的时候 Access-Control-Allow-Origin 需要时一个具体的域名 不能是*
  ctx.set('Access-Control-Allow-Credentials', true)
  // Credentials 资格
  await next()
})

// 编写一个路由
router.get('/api/post', async function (ctx) {
  console.log('cookie', ctx.cookies.get('name'));
  ctx.body = [
    { title: 'node.js 入门到精通', createTime: '2018-12-12' },
    { title: 'php 入门到精通', createTime: '2018-11-11' },
  ]
});
router.get('/api/user', async (ctx) => {
  console.log(ctx)
  const callback = ctx.request.query.callback
  const user = {
    name: 'abc',
    age: 18
  }
  ctx.body = `${callback}(${JSON.stringify(user)})`
})

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000, () => {
  console.log('server is running 3000');
});
