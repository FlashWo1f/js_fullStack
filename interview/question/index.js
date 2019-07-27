function Person(name) {
  this.name = name
  return {}
  // 构造函数本身是不需要返回值的，使用new来创建时，但是如果reutrn了非对象，就会忽略掉return 的值。如果是对象则返回该对象(return null也会忽略返回值)
}
function Student(){

}
Student.prototype = Person.prototype
// Student.prototype.constructor = Student
let p = new Student('wn')
console.log(p instanceof Person)    // true
// console.log(p)
// p.__proto__ = Person.prototype
// Person.__proto__ = Function.prototype

var foo = {},
    F = function() {};
Object.prototype.a = 'valA'
Function.prototype.b = 'valB'
console.log(foo.a,F.b,foo.b,F.a)


for(var i = 0; i < 10; i++) { // let 
  setTimeout(() => {
    console.log(i)
  }, 0)
}

//  let 每次循环生成一个封闭的块级作用域和setTimeout绑定  var每次循环会覆盖掉上一次的作用域
// 闭包可以创建块级作用域  在此也可以实现

// for in 迭代 for of 有什么区别

Array.prototype.method = function() {
  console.log('wn')
}
var myArray = [1, 2, 3, 4, 5, 6, 7]
for(let index of myArray) { // let of 没问题
  console.log('----index ----', index)
}
for(let ind in myArray) { //有点问题  会把method打印出来 加到原型链上都会被遍历
  console.log('``ind```', myArray[ind])
}
// for in  适合遍历对象
// 1. index是索引为字符串型数字 不能进行几何运算
// 2. 遍历的顺序有可能不是按照实际数组的内部顺序
// 3. 使用FOR in 会遍历数组所有的可枚举属性 包括原型

// for of
// for in 遍历的是数组的索引(键名) 而for of 遍历的是数组的元素
// for of 遍历的只是数组的元素 而不包括数组的原型属性和索引

let gArr = [1, [2, 3], 4, 5, [6, 7, [3, 2, 8]]]

let res = gArr.toString().split(',').map(item => parseInt(item))
console.log(Array.from(new Set(res)))
function output(arr) {
  let res = []
  for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(output(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}
console.log('output', output(gArr))

function reduceArr(arr) {
  return arr.reduce((pre, item) => {
    return pre.concat(Array.isArray(item) ? reduceArr(item) : item)
  }, [])
}
console.log('reduce', reduceArr(gArr))
