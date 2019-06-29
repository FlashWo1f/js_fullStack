// 很多组件中使用到了评论组件 所以封装成一个公共组件
// 在需要此组件的组件中导入 在父组件中使用components属性 将刚才的comment组件 注册为自己的子组件
// 将注册子组件时候的注册名称，以标签的形式引入即可

每个新闻的详情页面 是根据$route.param.id请求不同的API

## 实现点击加载更多评论的功能
1. 为加载更多按钮 绑定点击事件 在事件中 请求下一页数据
2. 点击加载更多 让pageIndex(页数)  + 1  然后重新调用$http请求
3. 注意 请求第二页数据 要push 到第一页数据数组中 而不是覆盖它 comments.concat(res.body.message)

## 发表评论
1. 把文本框双向数据绑定
2. 发表按钮绑定事件
3. 校验输入框数据  .trim() 清除空格 
4. 通过vue.resource 发送一个请求 把评论内容提交给服务器
5. 发表评论后 重新刷新列表 以查看最新数据
 评论成功后 手动拼接一个最新评论对象 调用数组unshift方法 把最新评论追加到data里面
 POST

 display: flex;
 justify-content: space-between;

## 尝试在手机上 去进行项目的预览和测试
1. 要保证自己的手机正常的运行
2. 要保证手机和开发电脑处于一个局域网中 手机可以访问到电脑的IP
3. 打开自己的项目中package.json 文件 在dev脚本中 添加一个 --host指令，把当前电脑的wifi ip地址 设置为--host的指令值  默认为127.0.0.1
 在cmd终端运行ipconfig 查看无线网的IP

## 两种跳转方式
1. 使用a标签的跳转 也即router-link 标签式跳转
2. 使用window.location.href 的形式 叫做编程式导航  (利用点击事件)
this.$router.push("/home/goodsinfo")


## route router
this.$route是路由参数对象 所以路由中的参数 params query都属于他
this.$router是路由导航对象，用它可以方便的使用js代码 实现路由的前进后退