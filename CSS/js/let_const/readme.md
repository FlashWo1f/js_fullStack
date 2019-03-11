# 作用域 Scope
document DOM
    getElementsByTagName
    getElementsByClassName
    querySelector
    querySelectorAll
window BOM
    全局定义了 var name = "yh";
    全局变量   前端js全局是 window
    局部变量    function()
    window js 内嵌在浏览器中的脚本语言，它与其它语言不一样的地方在于
    它有一个顶级的window  全局变量挂载在window上
    console.log(name);  (window.name)
    window 类型查询   typeof
    数值  字符串 布尔值 null  undefined
    Symbol object
    const let 比var优秀的地方  遵循块级作用域
    全局->函数局部->块级作用域
    scope  范围

    setTimeout 异步的内置函数
    for 循环  立即同步执行
    1000  之后  i var 变成了10
    let  使用块级作用域   for {块级作用域 let } 
    1000 后，let创建独立作用域，来保存i值.