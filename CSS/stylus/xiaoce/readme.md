不再写css，写的时css的预编译语言stylus
快 ！   
C:/Users/10640/AppData/Roaming/npm/node_modules/stylus/lib/functions/index.styl

一套语法，支持现在css开发，
它有一个/compile过程
stylus style.styl -o style.css 
-o output 输出的
stylus -w style.styl -o style.css 
watch 一直监听style.styl文件的修改，实时地去生成style.css

1. 跟CSS 的规则说byebye
{}：;
2. stylus 提供嵌套
    可以帮我们补上前面的选择器
    现在我们的CSS 就模块化了， 从此CSS就有编程的感觉了
3. &运算符
依然使用TAB缩进， 但是它与上一级同级，并不是嵌套的概念
适合于同一个元素多个类名  .active
或者伪类，伪状态
4. 变量定义
将常用的，重复使用的
css不是编程语言  是表达型的
在最上面统一定义后，可以修改一处，
即可修改使用此变量的地方
成为网站的风格


css语法
  1. overflow:hidden
  2. flex align-items 搞定vertical-align 有时不好搞的情况
  vertical-align 兄弟之间  img+兄弟
  3. text-rendering:optimizeLegibility;
  抗锯齿 高清手机上文字边缘不出现锯齿
  4. flex-shrink:0  
  flex-grow
  5. 第几个元素的选择
  :first-child  :last-child
  :nth-child(2n) :nth-child(2n+1)
  6. -apple-system