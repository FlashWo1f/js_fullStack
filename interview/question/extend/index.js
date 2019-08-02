function Animal(name) {
  this.name = name
  this.sleep = function () {
    return this.name + '...'
  }
}

Animal.prototype.eat = function(food) {
  console.log(this.name + ' is eating ' + food)
}

// 原型链的继承

// function Cat() {

// }

// Cat.prototype = new Animal('cat')
// Cat.prototype = new Animal()
// Cat.prototype.name = 'cat'
/*let cat = new Cat()
console.log(cat.name)
console.log(cat.eat('fish'))
console.log(cat.sleep())
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)*/


// 构造函数的继承
function Cat(name) {
  // 将Animal的作用域带到这里
  Animal.call(this)
  this.name = name || 'Tom'
}
let cat = new Cat('wn')
console.log(cat.name)
console.log(cat.sleep())  // 
console.log(cat instanceof Animal)  // false