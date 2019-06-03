const Koa = require('koa')

const app = new Koa()

// 负责计算时间间隔
app.use(async (ctx, next) => {
  const start = Date.now()
  // ctx.body = 'hello koa'
  await next()
  const end = Date.now()
  const diff = end - start
  // 塞到响应头里面 writeHead Content-type
  ctx.set('X-Response-Time', `${diff}ms`)
  console.log(`spend ${diff}ms`)
})
// 负责response到页面
app.use(async (ctx) => {
  ctx.body = 'hello koa'
})
app.listen(3001, () => {

})