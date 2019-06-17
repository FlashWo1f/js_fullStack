- 相应框架或技术栈的快速启动
github  项目 Starter
  .git文件删除

- 组件 路由接管一切
  最好用目录
  <router-view />
  如何install

- 全家桶
  vue-router  路由
  vuex    数据流管理
  axios   API请求

- webpack alias 配置自定义路径 webpack.config.js文件下
  resolve: {
    alias: {
      // 自定义路径选项
      '~': resolve(__dirname, 'src'),
      'pages': resolve(__dirname, 'src/pages'),
      'components': resolve(__dirname, 'src/components'),
    }
  }

- 目录架构
  - components 组件
  - pages 页面级别组件
  - commons header footer dialog 等跨页面的通用组件
  - element-ui 框架级别的组件  全局可用

- 在components pages 目录下加一个index.js  模块化输出所有文件
  为了可读性

- transition name
  v-enter(极短时间) => v-enter-active(transition-time)  Enter
  v-leave => v-leave-active     Leave
