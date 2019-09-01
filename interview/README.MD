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

1. 所有引用类型都具有对象特性，即可以自由扩展属性
2. 所有引用类型都具有一个__proto__（隐式原型）属性，是一个普通对象
3. 所有的函数都具有prototype（显式原型）属性，也是一个普通对象
4. 所有引用类型__proto__值指向它构造函数的prototype
5. 当试图得到一个对象的属性时，如果变量本身没有这个属性，则会去他的__proto__中去找

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

## 设计模式之发布订阅

它其实是一种对象间一对多的依赖关系，当一个对象的状态发送改变时，所有依赖于它的对象都将得到状态改变的通知

作用：
1. 广泛应用于异步编程中(替代了传递回调函数)
2. 对象之间松散耦合的编写代码
let event = {
    list: {},
    on(key, fn) {
        if (!this.list[key]) {
            this.list[key] = [];
        }
        this.list[key].push(fn);
    },
    emit() {
        let key = [].shift.call(arguments),
            fns = this.list[key];

        if (!fns || fns.length === 0) {
            return false;
        }
        fns.forEach(fn => {
            fn.apply(this, arguments);
        });
    },
    remove(key, fn) {
        // 这回我们加入了取消订阅的方法
        let fns = this.list[key];
        // 如果缓存列表中没有函数，返回false
        if (!fns) return false;
        // 如果没有传对应函数的话
        // 就会将key值对应缓存列表中的函数都清空掉
        if (!fn) {
            fns && (fns.length = 0);
        } else {
            // 遍历缓存列表，看看传入的fn与哪个函数相同
            // 如果相同就直接从缓存列表中删掉即可
            fns.forEach((cb, i) => {
                if (cb === fn) {
                    fns.splice(i, 1);
                }
            });
        }
    }
};

function cat() {
    console.log('一起喵喵喵');
}
function dog() {
    console.log('一起旺旺旺');
}

event.on('pet', data => {
    console.log('接收数据');
    console.log(data);
});
event.on('pet', cat);
event.on('pet', dog);
// 取消dog方法的订阅
event.remove('pet', dog);
// 发布
event.emit('pet', ['二哈', '波斯猫']);
/*
    接收数据
    [ '二哈', '波斯猫' ]
    一起喵喵喵
*/

创建一个对象(缓存列表)
on方法用来把回调函数fn都加到缓存列表中
emit方法取到arguments里第一个当做key，根据key值去执行对应缓存列表中的函数
remove方法可以根据key值取消订阅

优点：

对象之间的解耦
异步编程中，可以更松耦合的代码编写

缺点：

创建订阅者本身要消耗一定的时间和内存
多个发布者和订阅者嵌套一起的时候，程序难以跟踪维护

## 类的创建与继承


## 原型链
实例的原型指向构造器的prototype属性
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student


## 深拷贝和浅拷贝
深拷贝和浅拷贝最主要的区别就是其在内存中的存储类型不同
堆和栈都是内存中划分出来用来存储的区域
浅拷贝： 将原对象或原数组的引用直接赋给新对象，新数组，新对象／数组只是原对象的一个引用
深拷贝： 创建一个新的对象和数组，将原对象的各项属性的“值”（数组的所有元素）拷贝过来，是“值”而不是“引用”
> 栈（stack）为自动分配的内存空间，它由系统自动释放；而堆（heap）则是动态分配的内存，大小不定也不会自动释放
- 浅拷贝的实现方式
  1. Object.assign()
    Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。但是 Object.assign()进行的是浅拷贝，拷贝的是对象的属性的引用，而不是对象本身。
    var obj = { a: {a: "kobe", b: 39} };
    var initalObj = Object.assign({}, obj);
    initalObj.a.a = "wade";
    console.log(obj.a.a); //wade
    `当object只有一层的时候，是深拷贝`
  2. Array.prototype.concat()
  3. Array.prototype.slice()
- 深拷贝的实现方式
  1. JSON.parse(JSON.stringify())
    用JSON.stringify将对象转成JSON字符串，再用JSON.parse()把字符串解析成对象，一去一来，新的对象产生了，而且对象会开辟新的栈，实现深拷贝  `这种方法虽然可以实现数组或对象深拷贝,但不能处理函数`
  2. 

- 浅拷贝和赋值(=)的区别
  var obj1 = {
          'name' : 'zhangsan',
          'age' :  '18',
          'language' : [1,[2,3],[4,5]],
      };

      var obj2 = obj1;


      var obj3 = shallowCopy(obj1);
      function shallowCopy(src) {
          var dst = {};
          for (var prop in src) {
              if (src.hasOwnProperty(prop)) {
                  dst[prop] = src[prop];
              }
          }
          return dst;
      }

      obj2.name = "lisi";
      obj3.age = "20";

      obj2.language[1] = ["二","三"];
      obj3.language[2] = ["四","五"];

      console.log(obj1);  
      //obj1 = {
      //    'name' : 'lisi',
      //    'age' :  '18',
      //    'language' : [1,["二","三"],["四","五"]],
      //};

      console.log(obj2);
      //obj2 = {
      //    'name' : 'lisi',
      //    'age' :  '18',
      //    'language' : [1,["二","三"],["四","五"]],
      //};

      console.log(obj3);
      //obj3 = {
      //    'name' : 'zhangsan',
      //    'age' :  '20',
      //    'language' : [1,["二","三"],["四","五"]],
      //};

然后我们改变 obj2 的 name 属性和 obj3 的 name 属性，可以看到，改变赋值得到的对象 obj2 同时也会改变原始值 obj1，而改变浅拷贝得到的的 obj3 则不会改变原始对象 obj1。这就可以说明赋值得到的对象 obj2 只是将指针改变，其引用的仍然是同一个对象，而浅拷贝得到的的 obj3 则是重新创建了新对象。
然而，我们接下来来看一下改变引用类型会是什么情况呢，我又改变了赋值得到的对象 obj2 和浅拷贝得到的 obj3 中的 language 属性的第二个值和第三个值（language 是一个数组，也就是引用类型）。结果见输出，可以看出来，无论是修改赋值得到的对象 obj2 和浅拷贝得到的 obj3 都会改变原始数据。
这是因为浅拷贝只复制一层对象的属性，并不包括对象里面的为引用类型的数据。所以就会出现改变浅拷贝得到的 obj3 中的引用类型时，会使原始数据得到改变
`https://juejin.im/post/59ac1c4ef265da248e75892b`
而深拷贝就需要递归一下了
 // 内部方法：用户合并一个或多个对象到第一个对象
    // 参数：
    // target 目标对象  对象都合并到target里
    // source 合并对象
    // deep 是否执行深度合并
    function extend(target, source, deep) {
        for (key in source)
            if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
                // source[key] 是对象，而 target[key] 不是对象， 则 target[key] = {} 初始化一下，否则递归会出错的
                if (isPlainObject(source[key]) && !isPlainObject(target[key]))
                    target[key] = {}

                // source[key] 是数组，而 target[key] 不是数组，则 target[key] = [] 初始化一下，否则递归会出错的
                if (isArray(source[key]) && !isArray(target[key]))
                    target[key] = []
                // 执行递归
                extend(target[key], source[key], deep)
            }
            // 不满足以上条件，说明 source[key] 是一般的值类型，直接赋值给 target 就是了
            else if (source[key] !== undefined) target[key] = source[key]
    
### 深拷贝
JS的原生不支持深拷贝，Object.assign和{...obj}都属于浅拷贝，下面我们讲解如何使用JS实现深拷贝。

JSON.sringify 和 JSON.parse 实现深拷贝
原理就是先将对象转换为字符串，再通过JSON.parse重新建立一个对象。 但是这种方法的局限也很多：
  不能复制function、正则、Symbol
  循环引用报错
  相同的引用会被重复复制
  `手写递归深拷贝`
  //定义检测数据类型的功能函数
    function checkedType(target) {
      return Object.prototype.toString.call(target).slice(8, -1)
    }
    //实现深度克隆---对象/数组
    function clone(target) {
      //判断拷贝的数据类型
      //初始化变量result 成为最终克隆的数据
      let result, targetType = checkedType(target)
      if (targetType === 'Object') {
        result = {}
      } else if (targetType === 'Array') {
        result = []
      } else {
        return target
      }
      //遍历目标数据
      for (let i in target) {
        //获取遍历数据结构的每一项值。
        let value = target[i]
        //判断目标结构里的每一值是否存在对象/数组
        if (checkedType(value) === 'Object' ||
          checkedType(value) === 'Array') { //对象/数组里嵌套了对象/数组
          //继续遍历获取到value值
          result[i] = clone(value)
        } else { //获取到value值是基本的数据类型或者是函数。
          result[i] = value;
        }
      }
      return result
    }
`https://juejin.im/post/5b5dcf8351882519790c9a2e`

## 前端事件流
HTML中与javascript交互是通过事件驱动来实现的，例如鼠标点击事件onclick、页面的滚动事件onscroll等等，可以向文档或者文档中的元素添加事件侦听器来预订事件。想要知道这些事件是在什么时候进行调用的，就需要了解一下“事件流”的概念。
什么是事件流：事件流描述的是从页面中接收事件的顺序,DOM2级事件流包括下面几个阶段。
  事件捕获阶段

  处于目标阶段

  事件冒泡阶段
addEventListener：addEventListener 是DOM2 级事件新增的指定事件处理程序的操作，这个方法接收3个参数：要处理的事件名、作为事件处理程序的函数和一个布尔值。最后这个布尔值参数如果是true，表示在捕获阶段调用事件处理程序；如果是false，表示在冒泡阶段调用事件处理程序。
` 如何让事件先冒泡后捕获`
在DOM标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获事件。
### 事件委托
简介：事件委托指的是，不在事件的发生地（直接dom）上设置监听函数，而是在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素DOM的类型，来做出不同的响应。
举例：最经典的就是ul和li标签的事件监听，比如我们在添加事件时候，采用事件委托机制，不会在li标签上直接添加，而是在ul父元素上添加。

好处：比较合适动态元素的绑定，新添加的子元素也会有监听函数，也可以有事件触发机制。

### 懒加载和预加载
预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。
懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。


两种技术的本质：两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。
懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力

`懒加载 的图片一定设置高度`
在img标签上的src属性上不设置值  在一个自定义的属性上准备好该图片的URL 也加一个lazyload属性来表示这是lazyload图片 用var eles = document.querySelectorAll('img[data-original][lazyload]')
来取到 有lozyload和data-original属性的img标签
rect = item.getBoundingClientRect()  用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
if (rect.bottom >= 0 && rect.top < viewHeight)
!function () {
    // var img = new Image()
    // img.src = item.dataset.original
    // img.onload = function () {
    //     item.src = img.src
    // }
    item.src = item.dataset.original
    item.removeAttribute("data-original")//移除属性，下次不再遍历
    item.removeAttribute("lazyload")
  }()
  lazyload()//刚开始还没滚动屏幕时，要先触发一次函数，初始化首页的页面图片
document.addEventListener("scroll",lazyload)

## js的new操作符做了哪些事情
new 操作符新建了一个空对象，这个对象原型指向构造函数的prototype，执行构造函数后返回这个对象。
new 通过构造函数 Test 创建出来的实例可以访问到构造函数中的属性
new 通过构造函数 Test 创建出来的实例可以访问到构造函数原型链中的属性，也就是说通过 new 操作符，实例与构造函数通过原型链连接了起来
构造函数本没有返回值  如果自己强行加上一个返回值  如果它是基本数据类型 结果是一样的  返回值没有意义
如果它是对象，那么这个返回值会被正常使用  但是返回原始值不会生效 new也没有用 所以不要给构造函数return


##  Event loop 任务队列
- 我们都知道JavaScript是单线程的，也就是说同一时间只能干一件事。这是因为JavaScript主要是用来操作DOM的，如果变成多线程，浏览器就懵逼了，不知道该听谁的了。但是虽然js是单线程，但是完全可以模拟多线程，靠的就是Event Loop
- 我们都知道js中的代码分 同步 和 异步，所谓的 异步 其实就是不会阻塞我们的主线程，等待主线程的代码执行完毕才会执行。callback setTimeout setInterval Promise ... 这些都是都是我们耳熟能详的 异步 代码
> https://juejin.im/post/5b63b4cb6fb9a04fb4017f5a
宏观任务 macrotask: setTimeout setInterval requestAnimationFrame HTML的解析 js的主线程 页面加载 用户交互
微观任务 microtask promise mutation.oberver process.nextTick

script > process.nextTick > promise > setTimeout > setInterval > setImmediate > I/O > UI rendering

## Object.defineProperty
> `https://www.jianshu.com/p/8fe1382ba135`  arr.flat(Infinity)
configrable 描述属性是否配置，以及可否删除
enumerable 描述属性是否会出现在for in 或者 Object.keys()的遍历中
value
writable

## cross-env
运行跨平台设置和使用环境变量的脚本
cross-env POST=4000

## 闭包和作用域链
- 作用域链：当代码在一个环境中执行，会创建变量对象的一个作用域链。
  作用域链的作用：是保证对执行环境有权访问的所有变量和函数的有序访问

  我们都知道当一个函数被执行之后，之前函数内的局部变量会被销毁。而全局变量是始终不会销毁的，当我们想要在全局环境始终保持一个变量(比如session)的时候往往会将它定义为全局变量，但是这样做的危险就是污染了全局变量。这时的做法往往就是建立一个函数，将想要保存的变量闭包起来，使其不污染全局变量。

  闭包的作用域链中保存的元素，该元素将无法被销毁，在垃圾回收时不会被收回。如果保存元素为一个引用变量，而且不是必须要保存的，那么它也会因此被保存下来占据大量的内存，造成内存泄漏。所以当闭包作用域链中保存的引用变量不需要的时候，应设置为null，解除引用确保正常回收其占用的内存。

  闭包最大的作用就是可以利用作用域链访问到局部变量，通过调用嵌套匿名函数可以把外围作用域中的变量值存储在内存中而不在函数调用(实际调用的为嵌套匿名函数，不是外围函数)完毕后就销毁。当然使用不当会造成内存泄漏等问题，所以使用谨慎使用。

- 闭包的弊端
    1. 闭包的缺点就是让常驻内存增加内存使用量，并且使用不当是造成内存泄漏
    2. 如果不是因为某些特殊原因而需要闭包，在没有必要的情况下，在其他函数中是不建议再创建函数的
    因为闭包对脚本性能具有负面影响

## 内存溢出 和 内存泄漏

内存溢出：在程序中申请内存时，没有足够的内存空间供其使用，出现out of memory；比如申请了一个integer,但给它存了long才能存下的数，那就是内存溢出
内存泄漏：在程序申请内存后，无法释放已申请的内存空间，一次内存泄漏危害可以忽略，但内存泄漏堆积后果很严重，无论多少内存，迟到会被占光

## call apply bind
核心概念：借用方法
A对象有个方法，B对象因为某种原因也需要用到同样的方法，那么这时候我们是单独为 B 对象扩展一个方法呢，还是借用一下 A 对象的方法呢？

当然是借用 A 对象的方法啦，既达到了目的，又节省了内存。
  调用他们的必须是函数
  call、apply和bind是挂在Function对象上的三个方法,只有函数才有这些方法。
  apply第二个参数是个数组  马上执行
  call参数2到n  马上执行
  bind返回的是一个函数  不会马上执行

> 扩展 如何让var没有块级作用域在for循环每次输出i的值

for (var i = 1; i <= 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log('闭包:', i); // 依次输出：1 2 3 4 5
        }, i * 1000);
    }(i));
}
使用闭包来保存变量

for (var i = 1; i <= 5; i++) {
    // 缓存参数
    setTimeout(function (i) {
        console.log('bind', i) // 依次输出：1 2 3 4 5
    }.bind(null, i), i * 1000);
}
实际上这里也用了闭包，我们知道bind会返回一个函数，这个函数也是闭包

## 执行上下文
每次当控制器转到可执行代码的时候，就会进入一个执行上下文。执行上下文可以理解为当前代码的执行环境，它会形成一个作用域
它是什么：在JS的运行代码 代码的执行环境非常重要 通常分三种情况
1. Global code 代码第一次执行时的默认环境
2. Function code 函数体中代码
3. Eval code 函数内执行的文本 (实际开发不多)

当浏览器第一次加载脚本时，默认情况下，它会进入全局上下文。如果在全局代码中调用了一个函数，则代码的执行会进入函数中，此时会创建一个新的执行上下文，它会被推到执行上下文栈中。
如果在这个过程中函数内部调用了另一个函数，会发生同样的事情，代码的执行会进入函数中，然后创建一个新的执行上下文，它会被推到上下文栈 的顶部。浏览器始终执行栈顶部的执行上下文
一旦函数完成执行，当前的执行上下文将从栈的顶部弹出，然后继续执行下面的，下面程序演示了一个递归函数的执行上下文情况
- 执行上下文栈
5个特点
  单线程
  同步执行
  只有一个全局上下文
  同步执行，只有栈顶的上下文处于执行中，其他上下文需要等待
  全局上下文只有唯一的一个，它在浏览器关闭时出栈
  任意数量的函数上下文
  每个函数调用都会创建一个新的执行上下文，包括自己调用自己
- 我们知道每次调用一个函数时，都会创建一个新的执行上下文。但是在 JavaScript 解释器中，每次调用执行上下文会有两个阶段
1. 创建阶段
  建立作用域链
  创建变量 函数 argument
  确定this的指向
2. 执行阶段
  赋值 寻找函数引用 解释/执行代码

大概过程
  首先在程序执行时会创建一个全局的执行上下文，有且只有一个。
  函数在每次调用时就会创建一个函数上下文，可以有很多。
  函数上下文可以访问全局上下文的内容，反之则不行。
  创建的上下文会被推入到上下文栈中，然后从顶部开始依次执行。
  执行上下文会分为两个阶段：创建阶段和执行阶段。
  创建阶段会先进行函数声明和变量声明提前。
  创建阶段会先进行函数声明，然后进行变量声明，同时会被放入变量对象中，如果变量对象中已经存在：函数则进行引用的覆盖，变量则什么都不做。
  执行阶段才会进行赋值和运行。

## 普通函数和箭头函数的this指向问题
普通函数：根据调用我的人（谁调用我，我的this就指向谁）
箭头函数：根据所在的环境（我再哪个环境中，this就指向谁）
this指向
  函数调用: alert('Hello World!')


  方法调用: console.log('Hello World!')


  构造函数: new RegExp('\\d')


  隐式调用:  alert.call(undefined, 'Hello World!')


##  如何实现一个私有变量，用getName方法可以访问，不能直接访问
obj={
name:yuxiaoliang,
getName:function(){
return this.name
}
}
object.defineProperty(obj,"name",{
  /不可枚举不可配置

  通过函数的创建形式

function product(){
var name='yuxiaoliang';
this.getName=function(){
return name;
}
}
var obj=new product();

## 重排和重绘，讲讲看

重绘（repaint或redraw）：当盒子的位置、大小以及其他属性，例如颜色、字体大小等都确定下来之后，浏览器便把这些原色都按照各自的特性绘制一遍，将内容呈现在页面上。重绘是指一个元素外观的改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。
触发重绘的条件：改变元素外观属性。如：color，background-color等。

注意：table及其内部元素可能需要多次计算才能确定好其在渲染树中节点的属性值，比同等元素要多花两倍时间，这就是我们尽量避免使用table布局页面的原因之一。

重排（重构/回流/reflow）：当渲染树中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建, 这就称为回流(reflow)。每个页面至少需要一次回流，就是在页面第一次加载的时候。

重绘和重排的关系：在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程称为重绘。所以，重排必定会引发重绘，但重绘不一定会引发重排。
- 当render tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流(reflow)
每个页面至少需要一次回流，就是在页面第一次加载的时候

很多浏览器都会优化这些操作，浏览器会维护1个队列，把所有会引起回流、重绘的操作放入这个队列，等队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会flush队列，进行一个批处理。这样就会让多次的回流、重绘变成一次回流重绘。

## 日期
    new Date() // 创建一个时间对象 Fri Jul 12 2019 19:59:59 GMT+0800 (中国标准时间)

    // 返回自1970年1月1日 00:00:00 UTC到当前时间的毫秒数。
    Date.now(); // 1562932828164

    // 解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数
    Date.parse('2019.7.12') // 1562860800000

    // 年月日时分秒 获取
    let dateMe = new Date()

    dateMe.getFullYear() // 2019 | 根据本地时间返回指定日期的年份
    dateMe.getMonth() // 6 | 根据本地时间，返回一个指定的日期对象的月份，为基于0的值（0表示一年中的第一月）。
    dateMe.getDate() // 12 | 根据本地时间，返回一个指定的日期对象为一个月中的哪一日（从1--31）
    dateMe.getHours() // 20 |根据本地时间，返回一个指定的日期对象的小时。
    dateMe.getMinutes() // 11 | 根据本地时间，返回一个指定的日期对象的分钟数。
    dateMe.getSeconds() // 29 | 方法根据本地时间，返回一个指定的日期对象的秒数
    dateMe.getMilliseconds() // 363 | 根据本地时间，返回一个指定的日期对象的毫秒数。

    dateMe.toJSON() // 🔥 "2019-07-12T12:05:15.363Z" | 返回 Date 对象的字符串形式
    dateMe.getDay() // 5 | 根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天（0 - 6）
    dateMe.getTime() // 1562933115363 | 方法返回一个时间的格林威治时间数值。
    dateMe.toString() // "Fri Jul 12 2019 20:05:15 GMT+0800 (中国标准时间)" | 返回一个字符串，表示该Date对象
    dateMe.getTimezoneOffset() // -480（说明比正常时区慢480分钟，所以要加480分钟才对） | 返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟。
    dateMe.toDateString() // "Fri Jul 12 2019" | 以美式英语和人类易读的形式返回一个日期对象日期部分的字符串。


## 项目里 开发环境接口跨域
Webpack
配置nginx代理
他会帮我们代理转发
在 proxyTable: {
  '/api': {
    target: 'http://47.110.74.37:4000', // 后端接口地址
    changeOrigin: true, // 是否允许跨域,
    pathRewrite: {
      '^/api': '/', // 重写
    }
  }
}

## 高阶函数
- 函数可以作为参数传递(回调函数)
- 函数可以做返回值

## 跨域
- Jsonp
    jsonp是一种跨域通信的手段，它的原理其实很简单：
      1. 首先是利用script标签的src属性来实现跨域。
      2. 通过将前端方法作为参数传递到服务器端，然后由服务器端注入参数之后再返回，实现服务器端向客户端通信
      3. 由于使用script标签的src属性，因此只支持get方法
      
    实现: 一个函数，接受两个参数，一个是url 还有个是包含请求参数的对象，请求参数中有个callback参数，我们在全局上挂载一个方法对应callback。 讲url和请求参数拼接起来, 创建一个script标签，添加节点到body
    然后去请求服务器
      




## 自我介绍 
> 面试官您好 我叫李斌 今年20岁 现在是大三 在大二的时候学校开设的前端课程开始接触前端， 系统地学习大概有一年多时间，我对Vue和React都有过学习， 也都有写过简单的项目 也用到了Vuex和Redux，但是现在主要学习React，Vue忘记了许多，因为React中的JSX语法更加接近原生的JS语法，他也能达到训练JS能力，让开发者不是那么地依赖框架地去开发以及React背后强大地运营团队和良好的生态环境，所以我最终还是选择去主React，想找一个React技术栈相关的前端实习岗位，谢谢

情绪和缓跟语速有一定关系，尽量提醒自己把说话的速度降下来，不仅让面试官感受更好，也能让自己的情绪更稳定

## React项目描述
Redux  修改数据流程 
 通过Reducer和createStore创建一个数据仓库 在根组件上provide store 提供出去
 Redux是严格的单项数据流动  只能通过Reducer纯函数来改变数据
 组件容器container用高阶组件connect()()将组件包裹起来 通过mapDispatchtoProps将Dispatch Action这个动作封装成一个函数 然后通过connect  组件就可以在this.props中拿到这个方法，我们传参数到Action Action包含一个type和payload 而payload就是我们自行去添加的参数 通过订阅者发布模式通知所有订阅了该Action的Reducer去执行相应的操作返回一个新的Reducer 进而触发数据和页面的更新

## Redux
项目里需要一个视图层框架和数据层框架
Redux就是视图层框架  管理所有视图层的状态
## Redux-thunk
Middleware Redux-thunk
安装 npm i redux-thunk -S


## React-Router
- Router
他就是对Provider进行了一个封装 通过H5的history传进去 用来存储路由  通过传给Provider让其包裹的其他标签可以拿到history
- Link
他就是对a标签的封装  通过Link上的to取下来 把他push进history里面  在Provider里对history进行监听，发生变化时 就会重新刷新history重新Provider出去 这就实现了点击link标签实时更新history
- Route
通过路由匹配  把路由path和history进行匹配 匹配到了返回true 然后去显示出来对应的component组件

对比Vue-Router
Vue-Router 的是静态的  他把路由匹配规则都放在一个router文件里面  以一个对象的key value进行存储  每次点击跳转的时候 拿到key值  然后去对应显示value里面的组件
React-Router 
点击跳转一个路由  他会去history去动态的匹配 然后对应相应的component组件

## Webpack
webpack是现代前端开发中最火的模块打包工具，只需要通过简单的配置，便可以完成模块的加载和打包

### 设计自定义组件

- 暴露出来的API尽可能少
当然不是说功能多了不好，只是要善用外观模式或者命令模式等去封装一些操作，做到高内聚，API 过多会增加学习成本，一个高内聚的 API 会被认做是一个易于使用的 API
- 使用 props.children
在开始标签和结束标签中间的内容都会被塞进 props.children props，应该尽可能多的使用它，因为它比一个 content prop，或者一些文本内容需要传递的时候更易使用
- 扩散剩余的 props
function ToolTip({ isVisible, ...rest }) {
  return isVisible ? <span role="tooltip" {...rest} /> : null;
}
- 给出足够的默认值
- 编写 prop types
代码既文档，现在已经有 prop-types 包可用，去使用它


## 海康威视的面试

1. package.json里面具体有些什么东西
2. 你所提到的函数式编程是个什么概念？ 
    面向对象编程(OOP)通过封装变化使得代码更易理解。 函数式编程(FP)通过最小化变化使得代码更易理解。 
                                                          -- Michacel Feathers（Twitter）
    1) 可扩展性--我是否需要不断地重构代码来支持额外的功能？
    2) 易模块化--如果我更改了一个文件，另一个文件是否会受到影响？
    3) 可重用性--是否有很多重复的代码？
    4) 可测性--给这些函数添加单元测试是否让我纠结？
    5) 易推理性--我写的代码是否非结构化严重并难以推理？
    函数式编程可以解决这些问题
    函数式编程的目的是使用函数来抽象作用在数据之上的控制流和操作，从而在系统中消除副作用并减少对状态的改变。
    函数式编程的核心概念：
      - 声明式编程
      - 纯函数
      - 引用透明
      - 不可变性
          先聊 声明式编程
          函数式编程属于声明式编程规范： 这种范式会描述一系列的操作， 但是不会暴露它们是如何实现的或者是数据流如何传入他们
      // 命令式方式
          var array = [0, 1, 2, 3]
          for(let i = 0; i < array.length; i++) {
              array[i] = Math.pow(array[i], 2)
          }

          array; // [0, 1, 4, 9]

          // 声明式方式
          [0, 1, 2, 3].map(num => Math.pow(num, 2))
          很明显看到
          命名式很具体的告诉计算机如何执行某个任务
          而声明式是将程序的描述与求值分离开来。它关注如何用各种表达式来描述程序逻辑，而不一定要指明其控制流或状态关系的变化。


          再者是  纯函数
          它是指没有副作用的函数 相同的入参有相同的输出

          那么什么才叫有副作用啊
          常常这些情况会产生副作用。

          改变一个全局的变量、属性或数据结构
          改变一个函数参数的原始值
          处理用户输入
          抛出一个异常
          屏幕打印或记录日志
          查询 HTML 文档，浏览器的 Cookie 或访问数据库
      我们看到纯函数的输出结果是一致的，可预测的，相同的输入会有相同的返回值，这个其实也被称为引用透明。


      使用纯函数的代码绝不会更改或破坏全局状态，有助于提高代码的可测试性和可维护性
函数式编程采用声明式的风格，易于推理，提高代码的可读性。
函数式编程将函数视为积木，通过一等高阶函数来提高代码的模块化和可重用性。
可以利用响应式编程组合各个函数来降低事件驱动程序的复杂性(这点后面可能会单独拿一篇来进行讲解)


3. 模块化又是什么概念
4. React和Vue各自的优势在哪里


## 小牛哥

1. 事件循环中的setTimeout
  setTimeout中的运行机制
  setTimeout中的回调函数是在规定时间内把他推入执行栈内
2. React中有什么可以代替Vue中的computed函数  啊这个东西需要看看
react里的render函数依赖的变量发生改变时就会促发数据和页面的更新

## 端点科技
总共两面
第一面是简单的JS问题 加上一点CSS的布局问题
第二面就将简历上所有的技术栈进行了考察，我回答得很乱(回过头想)  
  1. 编程习惯问题 
  2. CSS预处理器
  3. ES6中 let const   除了Promise还有什么异步处理工具 generate async await
  4. node了解多少  Koa
  5. Vue和React各自的好处在哪里   我这里也说了我为什么选择React Redux原理知道那些  在这里我回答得有点卡顿  导致我想说React-router他都打断我说不用说， 对了  面试官变问我边纪录一些东西  到后面都不记录了(估计一位我不行了)
  6. Mysql和mongoDB  介绍
  7. 用过得git得命令
  8. 模块化  函数式编程  面向对象这些东西 聊聊 像比较纠根问底的面试官会让你说说什么是函数式编程 什么是模块化思想  什么是声明式编程  区别在哪里  仿佛忘记了我征求的岗位是实习岗位