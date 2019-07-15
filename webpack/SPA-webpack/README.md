## rollup 
three shaking
没用到的代码 不会被打包

## parcel(包裹)
0 配置 

## webpack 4.0
dev prod
production 会自动开启 tree shaking
作用域里面的代码无法分析

## css-module
解决命名冲突
利用 hash值 解决重复命名
在webpack.config.js 里配置

## webpack 3.0
import(/* webpackChunkName: 'async' */
magic commend 魔法注释
异步加载模块的
应用场景  路由

import Home from 'lazy!./components/Home'

用 babel-loader 检测有没有 lazy!
换成magic comment

## mini-css-extract-plugin 
可将JS中css脱离出来