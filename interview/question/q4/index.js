// 有权限访问其他函数作用域的函数称之为闭包
// 函数的作用域及其所有变量都会在函数执行结束后被销毁。
// 但是，在创建了一个闭包以后，这个函数的作用域就会一直保存到闭包不存在为止。
function foo () {
  var a = 2
  function fn () {
    console.log(a)
  }
  return fn()
}
foo()