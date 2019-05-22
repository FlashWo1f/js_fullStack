函数参数在怎么变化
es5 -> es6 params 在怎么变
为什么变
function func(a, b, c){

}
- 参数一个个列出来的原始方案
- 如果参数多的时候，同时又是一个对象的，使用JSON{}
    表单操作时，username, password sex ...
    let user = {}
    好读一些
- reset destructor...
  用于增强代码的可读性
  写代码时要考虑看代码人的感受
  提供初值，让代码更加适用

- 参数考题想起默认参数 + 参数可以是函数
    用来做参数缺失报错， 有是最好的