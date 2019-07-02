##本文件旨在记录平时遇到的零散的js知识点
  ECMAScript是一个国际通过的标准化脚本语言。JavaScript由ECMAScript和DOM、BOM三者组成。
可以简单理解为：ECMAScript是JavaScript的语言规范，JavaScript是ECMAScript的实现和扩展。
    https://blog.csdn.net/unionz/article/details/80032048
        2011 年，ECMAScript 5.1 版发布。之前我们大部分人用的也就是ES5

        2015 年 6 月，ECMAScript 6 正式通过，成为国际标准。
        ES5 中作用域有：全局作用域、函数作用域。没有块作用域的概念。

        ES6 中新增了块级作用域。块作用域由 { } 包括，if语句和 for语句里面的{ }也属于块作用域
        通过var定义的变量可以跨块作用域访问到。
        通过var定义的变量不能跨函数作用域访问到。
        wxapp 密钥
        d7c91a7905fb325742c81f6b4fc8981b
### var let const 的区别
        var定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。
        let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。
        const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改。

### 作用域 词法作用域
        词法作用域是作用域的一种工作模型
        所谓的词法作用域就是在你写代码时将变量和块作用域写在哪里来决定，也就是词法作用域是静态的作用域，在你书写代码时就确定了
### 闭包


## MVVM
    Model-View-ViewModel 就是将其中的 View 的状态和行为抽象化，让我们可以将UI和业务逻辑分开。当然这些工作 ViewModel 已经帮我们做了，它可以取出 Model 的数据同时帮忙处理 View 中由于需要展示内容而涉及的业务逻辑。

    MVVM模式是通过以下三个核心组件组成，每个都有它自己独特的角色：

        Model - 包含了业务和验证逻辑的数据模型
        View - 定义屏幕中View的结构，布局和外观
        ViewModel - 扮演“View”和“Model”之间的使者，帮忙处理 View 的全部业务逻辑

### dataset

onload()
onshow()

escape()
unescape()

propertity 谁调用组件谁传的参数
data 组件本身的参数

### Promise Sync aSync
    JS 是单线程的，用回调或Promise， 释放主线程的控制权
    主要因为JS是前端DOM的变成， 用户交互比较多， 等到执行完后，
    再通过event-loop机制， 拿回控制权(callback, resolve)


## MVC  MVVM
    MVC  用DOM改变
    MVVM 用数据改变
     

## Webpack
### 什么是Webpack
- webpack是模块化管理工具，使用webpack可以对模块进行压缩、预处理、按需打包、按需加载等
- webpack可以看做模块打包机，它做的事情是分析你的项目结构，找到js模块和预设的css，打包为合适的格式以供浏览器使用
- webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（main.js）,
webpack将冲这个文件中找到这个项目的所有依赖文件，使用loaders处理它们，最后打包为一个浏览器能识别的JavaScript文件
### Webpack 重要特征
- 插件化：webpack本身非常灵活，提供了丰富的插件接口。基于这些接口，webpack开发了很多插件作为内置功能
- 速度快：webpack使用异步IO以及多级缓存机制。所以webpack的速度是很快的，尤其是增量更新。
- 丰富的Loaders：loaders用来对文件做预处理。这样webpack就可以打包任何静态文件。
- 高适配性：webpack同时支持AMD/CommonJs/ES6模块方案。webpack会静态解析你的代码，自动帮你管理他们的依赖关系。此外，webpack对第三方库的兼容性很好。
- 代码拆分：webpack可以将你的代码分片，从而实现按需打包。这种机制可以保证页面只加载需要的JS代码，减少首次请求的时间。
- 优化：webpack提供了很多优化机制来减少打包输出的文件大小，不仅如此，它还提供了hash机制，来解决浏览器缓存问题。
- 开发模式友好：webpack为开发模式也提供了很多辅助功能。比如SourceMap、热更新等。
- 使用场景多：webpack不仅适用于web应用场景，也适用于Webworkers、Node.js场景
### Webpack配置关键字
- Loaders：由于webpack只能处理javascript，所以我们需要对一些非js文件处理成webpack能够处理的模块，比如sass文件
loader是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中

处理一个文件可以使用多个loader，loader的执行顺序和配置中的顺序是相反的，即最后一个loader最先执行，第一个loader最后执行
第一个执行的loader接收源文件内容作为参数，其它loader接收前一个执行的loader的返回值作为参数，最后执行的loader会返回此模块的JavaScript源码
- plugin在webpack运行的生命周期中会广播出许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的API改变输出结果。
### loader 和 plugin 的区别
对于loader，它是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将A.scss转换为A.css，单纯的文件转换过程
plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务

"babel-loader": "^7.1.4"
### css
    webpack提供两个工具处理样式表，css-loader和style-loader，两者任务不同，css-loader使你能够使用类似@import和url的方法实现require的功能，style-loader将所有计算后的样式加入页面，两者使用让你把样式嵌套于到webpack打包后的js文件中；
