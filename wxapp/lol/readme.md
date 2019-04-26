- 小程序开发工具，初始化了一个项目框架
    小程序是架构在微信(原生APP)，使用前端技术和思想，来快速开发，一份代码，到处运行

    好处： 
    不用下载，不用写两次(Android,IOS),快速高效

- html  => wxml(新标签)
  wxml? weixin xml 为了它的性能优化以及功能
  有的新的标签  view = div
  css  => wxss
  js  => js   bindtap => onclick
  page = wxml + wxss + js
  小程序就是由一个个page搭建起来的，每个page又由这三个部分组成
  app.json是项目描述文件  添加的page 要在app.json里声明切页面时，wx.navigateTo()

- MVVM
只要你有了数据，也叫Model, 在js中用data声明
Page({
    data:{
        legends: []
    }
})
View 视图层 WXML 等待数据编译输出的html模板  {{}}
指令 ，wx:for