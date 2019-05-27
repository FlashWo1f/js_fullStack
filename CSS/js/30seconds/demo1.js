// 高阶函数的考题 n
// ary 运行结果是函数
const ary = (fn, n) => (...args) => fn(...args.slice(0, n))
const first = ary(Math.max, 2)
console.log([[2, 5, 'a'], [8, 4, 9], [10]].map(x => first(...x)))