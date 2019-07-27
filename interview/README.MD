## 关于面试
1. 基础面试: 主要考察对岗位和简历中涉及到基础知识部分的提问,包括一部分算法和场景设计的面试题,这一面可能会涉及现场coding.
2. 项目面试: 主要考察简历中涉及的项目,会涉及你项目的相关业务知识、扮演角色、技术取舍、技术攻坚等等.
3. HR面试: 这一面通常是HR把关,主要涉及行为面试,考察候选人是否价值观符合公司要求、工作稳定性如何、沟通协作能力如何等等.
###而一个正常的技术面试流程(以项目面为例)分为大致三个部分:

1. 自我介绍
2. 项目(技术)考察
3. 向面试官提问


## 设计模式
1. 单例模式 (提设计一个弹窗)
2. 装饰者模式 (react, hoc)
3. 发布订阅 
4. 代理模式 (提到 看了koa源码) ctx

## JS数据类型
ECMAScript标准规定7种数据类型 其中又分为两种：原始数据类型和对象类型
### 原始类型
Null: 
Undefined
Boolean
Number
String
Symbol 一种实例是唯一且不可修改的类型
### 对象类型
Object Object Array Function Date RegExp 都属于特殊的对象

在JavaScript中，每一个变量在内存中都需要一个空间来存储。
### `内存空间又被分为两种，栈内存与堆内存`。
栈内存
- 存储的值大小固定
- 空间较小
- 可以直接操作其保存的变量，运行效率高
- 由系统自动分配存储空间

堆内存
- 存储的值大小不定，可动态调整
- 空间较大，运行效率低
- 无法直接操作其内部存储，使用引用地址读取
- 通过代码进行分配空间

相对于上面具有不可变性的原始类型，我习惯把对象称为引用类型，引用类型的值实际存储在堆内存中，它在栈中只存储了一个固定长度的地址，这个地址指向堆内存中的值

<img src="https://user-gold-cdn.xitu.io/2019/5/28/16afa4e25a85befd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1">
<img src="https://user-gold-cdn.xitu.io/2019/5/28/16afa4e49b1e49fd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1">
var name = 'ConardLi';
var name2 = 'ConardLi';
console.log(name === name2); // true
var obj = {name:'ConardLi'};
var obj2 = {name:'ConardLi'};
console.log(obj === obj2); // false

<img src="https://user-gold-cdn.xitu.io/2019/5/28/16afa4e49b1e49fd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1">

## 值传递和引用传递
let name = 'ConardLi';
function changeValue(name){
  name = 'code秘密花园';
}
changeValue(name);
console.log(name);  // ConardLi  即值传递

let obj = {name:'ConardLi'};
function changeValue(obj){
  obj.name = 'code秘密花园';
}
changeValue(obj);
console.log(obj.name); // code秘密花园  即引用传递

`ECMAScript中所有的函数的参数都是按值传递的。`

## 包装类型
为了便于操作基本类型值，ECMAScript还提供了几个特殊的引用类型，他们是基本类型的包装类型：
true === new Boolean(true); // false
123 === new Number(123); // false
'ConardLi' === new String('ConardLi'); // false
console.log(typeof new String('ConardLi')); // object
console.log(typeof 'ConardLi'); // string
引用类型和包装类型的主要区别就是对象的生存期，使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中，而自基本类型则只存在于一行代码的执行瞬间，然后立即被销毁，这意味着我们不能在运行时为基本类型添加属性和方法

## 装箱和拆箱
装箱转换：把基本类型转换为对应的包装类型
拆箱操作：把引用类型转换为基本类型
`既然原始类型不能扩展属性和方法，那么我们是如何使用原始类型调用方法的呢？`
每当我们操作一个基础类型时，后台就会自动创建一个包装类型的对象，从而让我们能够调用一些方法和属性，例如下面的代码
var name = "ConardLi";
var name2 = name.substring(2)
创建一个String的包装类型实例
在实例上调用substring方法
销毁实例

## 隐式类型转换
<img src="https://user-gold-cdn.xitu.io/2019/6/1/16b128d2444b90ce?imageView2/0/w/1280/h/960/format/webp/ignore-error/1">

null
undefined
''               =>   false 其他都为true
NaN
0
false
我们在对各种非Number类型运用数学运算符(- * /)时，会先将非Number类型转换为Number类型;
1.当一侧为String类型，被识别为字符串拼接，并会优先将另一侧转换为字符串类型。
2.当一侧为Number类型，另一侧为原始类型，则将原始类型转换为Number类型。
3.当一侧为Number类型，另一侧为引用类型，将引用类型和Number类型转换成字符串后拼接。

123 + '123' // 123123   （规则1）
123 + null  // 123    （规则2）
123 + true // 124    （规则2）
123 + {}  // 123[object Object]    （规则3）


null == undefined // true
null == '' // false
null == 0 // false
null == false // false
undefined == '' // false
undefined == 0 // false
undefined == false // false

`[] == ![] // true`
`!的优先级高于==，![]首先会被转换为false，然后根据上面第二点，false转换成Number类型0，左侧[]转换为0，两侧比较相等。`
# 判断JavaScript数据类型的方式
## typeof
typeof 'ConardLi'  // string
typeof 123  // number
typeof true  // boolean
typeof Symbol()  // symbol
typeof undefined  // undefined
typeof function(){}  // function

typeof [] // object
typeof {} // object
typeof new Date() // object
typeof /^\d*$/; // object
typeof null //object

## instanceof
instanceof操作符可以帮助我们判断引用类型具体是什么类型的对象：
[] instanceof Array // true
new Date() instanceof Date // true
new RegExp() instanceof RegExp // true

1.所有引用类型都具有对象特性，即可以自由扩展属性
2.所有引用类型都具有一个__proto__（隐式原型）属性，是一个普通对象
3.所有的函数都具有prototype（显式原型）属性，也是一个普通对象
4.所有引用类型__proto__值指向它构造函数的prototype
5.当试图得到一个对象的属性时，如果变量本身没有这个属性，则会去他的__proto__中去找

[] instanceof Array实际上是判断Array.prototype是否在[]的原型链上

## toString()
每一个引用类型都有toString方法，默认情况下，toString()方法被每个Object对象继承。如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中type是对象的类型。
const obj = {};
obj.toString() // [object Object]

## 一道有意思的面试题
一道经典的面试题，如何让：a == 1 && a == 2 && a == 3。
const a = {
   value:[3,2,1],
   valueOf: function () {return this.value.pop(); },
} 



### Set WeakSet Map WeakMap
set 是ES6新的数据结构  类似于数组  但是成员的值都是唯一的
const set = new Set([1,1,2,3,4,3])
[...set] => [1,2,3,4]
set => 类数组？？
set.size类似length  set没有length
set.add()
向Set里添加值不会类型转换 所以去重不会去掉 1 "1" 
另外  两个对象总是不相等的
set.add({})  => size: 1 => set.add({})  =>  siez: 2

- Set.prototype.constructor 构造函数 默认Set函数
- Set.prototype.size 返回Set实例的成员数
add(value)  添加值  返回set结构本身
delete(value) 返回布尔值  表示是否删除成功
has(value)    返回布尔值  
clear(value)  清除成员  不返回值

Array.from 可以将Set数据结构转换成数组
function dedupe(array) {
  return Array.from(new Set(array))
}

keys()  返回键名
values()  返回键值
entries() 返回键值对
forEach() 回调函数遍历每个成员
Set的遍历顺序就是插入顺序  这个特性有时有妙用  比如使用Set保存一个回调函数的列表 调用时保证调用顺序
Set结构没有键名只有键值  也可以说键名和键值是同一个值
`使用Set可以很容易地实现并集 交集 差集`
let a = new Set([1,2,3])
let b = new Set([4,3,2])
let Union = new Set([...a,...b])
let intersect = new Set([...a].filter(x => b.has(x)))
let diff = new Set([...a].filter(x => !b.has(x
)))

### 遍历器 Iterator

Object.prototype.toString.call