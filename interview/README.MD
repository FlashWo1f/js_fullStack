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
在DOM标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获之间。
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


##  Event loop
- 我们都知道JavaScript是单线程的，也就是说同一时间只能干一件事。这是因为JavaScript主要是用来操作DOM的，如果变成多线程，浏览器就懵逼了，不知道该听谁的了。但是虽然js是单线程，但是完全可以模拟多线程，靠的就是Event Loop
- 我们都知道js中的代码分 同步 和 异步，所谓的 异步 其实就是不会阻塞我们的主线程，等待主线程的代码执行完毕才会执行。callback setTimeout setInterval Promise ... 这些都是都是我们耳熟能详的 异步 代码
> https://juejin.im/post/5b63b4cb6fb9a04fb4017f5a