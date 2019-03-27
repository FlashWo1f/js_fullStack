Person 由prototype属性来解决它自身构造之外的原型或方法
原型对象会有它的构造函数 Person.prototype.constructor属性
第三者 实例
实例  跟Person 有什么关系   Person.prototype 有关系

js 的实例 跟类其实不是Java等语言的血缘关系
xxg 实例是怎么来的呢？
是new Person()出来的
1. Person函数运行 new的方式   this=>new Object();
随着构造函数的运行，得到构造函数里的方法
2. xxg 怎么拿到 Person.prototype原型对象上定义上的方法呢
__proto__属性 它指向构造函数的原型对象
3. 方法有prototype属性,值为对象 开支
4. 任何对象都有__proto__属性 指向他的原型对象
5. 原型对象上有constructor 属性指向谁是它的构造函数

原型链