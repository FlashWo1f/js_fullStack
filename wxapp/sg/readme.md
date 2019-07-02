- 全局配置
    window + tabBar
    assets目录 放静态文件 pages
    生命周期  wx.request

- UI 框架
    app.wxss 引入weui
    数据
    生命周期 wx.request

- list 有套路
    onLoad onReachBottom onPullDownRefresh
    isLoading 加载状态
    currentPage  要传参
    totalPage  最后一页

- tempalte 模板
    公用的界面
    <template data={{}} />
    <template name="loading" />
    
- 为什么小程序比较快
    - 安装包缓存
    - 分包加载
    - 独立渲染线程
    - Webview 预加载
    - Native 组件
