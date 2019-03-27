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
### var let const 的区别
        var定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。
        let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。
        const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改。