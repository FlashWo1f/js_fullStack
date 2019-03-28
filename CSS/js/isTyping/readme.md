类型检测是js考点

<!-- new Array()[] -->
Object
Array 可遍历的对象 for(i)
JSON object 对象字面量  可枚举的对象  for(key in)
function 是一等对象 

typeof不靠谱


1. Object.prototype.toString()
  它来弥补typeof说不清楚的地方 []
  它的返回值是字符串 "[object Object]"
2. 这方法可以借给Array 用
Object.prototype.toString.call([])
函数上就有call，动态制定内部的this指向
3. js的面向对象
Type{isString}

4. 立即执行函数 + 嵌套函数定义  形成了闭包
type 就在这些嵌套函数被调用时可以引用到
