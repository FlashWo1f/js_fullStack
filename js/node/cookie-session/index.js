const Koa = require('koa')
const koaSession = require('koa-session')
const Router = require('koa-router')
const staticServer = require('koa-static')
const session_signed_keys = ['secret']
const path = require('path')
const app = new Koa()
const router = new Router
app.keys = session_signed_keys
const sessionConfig = {
  key: 'sessionID',  // 放在cookie里面
  maxAge: 1000 * 15,
  rolling: true   // 每次响应的时候  刷新有效期
}
const session = koaSession(sessionConfig, app)
// 标注将哪里的文件为静态资源
app.use(staticServer(path.join(__dirname, './static')))
app.use(session)
//  /user 用户页面
// /post 文章界面
// if(ctx.path === './user')
// if(ctx.path === './post')
// localhost:9999 /  在根路由
// 试试静态资源服务
// router.get('/', async (ctx) => {
//   ctx.type = "html"
//   ctx.body = `
//   <a href="/user">/user</a>
//   <a href="/post">/post</a>
//   `
// })
router.get('/user', async (ctx) => {
  ctx.cookies.set('userName', 'userValue', {
    path: '/user',
    httpOnly: false
  })
  ctx.cookies.set('userName1', 'userValue1')
  

  ctx.body = 'user'
})
router.get('/post', async (ctx) => {
  ctx.body = 'post'
})
router.get('/user/abc', async(ctx) => {
  ctx.cookies.set('userName2', 'userValue2', {
    path: '/user/abc'
})
  ctx.body = '/user/abc'
})
router.get('/login', async (ctx) => {
  const { name, password } = ctx.query
  if (name === 'test' && password === '111'){
    ctx.session.login = true
    ctx.type = 'html'
    ctx.body = `
      <a href="/testlogin">测试登录状态</a>
    `
  }else{
    ctx.session.login = false
    ctx.body = 'wrong name or password'
  }
})
router.get('/testlogin', async (ctx) => {
  if (ctx.session.login){
    ctx.body = '登陆成功'
  }else{
    ctx.redirect('/')
  }
})

app.use(router.routes())
app.listen(9999, () => {
  console.log('server is running 9999')
})