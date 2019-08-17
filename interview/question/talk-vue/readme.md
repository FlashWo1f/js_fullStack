基于 Vue 2.0 + Vuex + Vue-Router 全家桶实现方案来模仿网易云音乐WebApp项目
CSS预编译工具使用的是stylus 音乐滚动加载用的是BetterScroll 全面采用ES6代码风格

解决了哪些问题
- 图片懒加载  vue-lazyload
- 前后端分离  
  使用node.js NeteaseCloudMusicAPI  Proxy 8080 + 3000
  跨域解决方案 按api文档的约定来开发
  服务于产品和运营的需要 设计API
- fastclick
- 设计了store
    songs index song singer mode favoriteList   (reducer)
    searchHistory  playHistory
- iconfont
- eslint
- 组件化拆分

