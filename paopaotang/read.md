class类 js 现在也有了
es5 没有class  关键字   怎么做面向对象呢？
js 是面向对象的， function 是一等对象
普通函数 Player()
new Player(); 作为类的构造函数被运行
function Player (){ this }
this 一直都在，函数里的一个常在，也是一个指针
this 指向一个Object{}  this.name = name

函数运行方式的不同，里面的this指向不同
当普通函数运行的时候  this指针没有使命，全局，前端 window ，node指向 global  undefined
函数作为构造函数被运行时  new Player();
this 指向实例化的对象，构造函数需要的过程，

- 函数可以用来构造类  js ，通过this
- this 一直存在
  函数的运行方式会导致this的指向不一样
  普通函数 this  =>  全局 window/global
  如果代码启动严格模式，this就指向undefined  
- new 过程之中发生了什么
this => {} constructor
this.name = name 
- 构造函数
当new Play(); 将函数作为构造函数运行，
this 指向即将生成的对象