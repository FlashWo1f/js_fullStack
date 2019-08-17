function Animal(name) {
  this.name = name
  this.sleep = function () {
    return this.name + '...'
  }
}

Animal.prototype.eat = function(food) {
  console.log(this.name + ' is eating ' + food)
}
// 组合继承
function Cat(name) {
  console.log('s',this)
  Animal.call(this, name)
}
let cat = new Cat('tom')
console.log(cat.name)
console.log(cat.sleep())  // tom...
console.log(cat instanceof Cat)
console.log(cat instanceof Animal)  /// false

// ------------------------------
// 寄生继承
function Cat1(name) {
  Animal.call(this)
  this.name = name || 'Jim'
}

(function() {
  // 创建一个没有实例方法的类
  var Super = function() {}
  Super.prototype = Animal.prototype
  Cat1.prototype = new Super()
})()
let cat1 = new Cat1()
console.log('----', cat1.name)
console.log('----', cat1.sleep())
console.log('----', cat1 instanceof Cat1)
console.log('----', cat1 instanceof Animal)