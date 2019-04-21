// 全局变量太多 ,cache只为mult服务  全局污染
// 函数内部的变量运行后就消失
const mult = (function() {
    const cache = {}
    return function (...args) {
        let key = Array.prototype.join.call(args, ',')
        if (key in cache) {
            return cache[key]
        }
        let a = 1
        for (let i = 0, l = args.length; i < l; i++) {
            a = a * args[i]
        }
        cache[key] = a;
        console.log(cache)
        return a
    }
})()

console.log(mult(1, 2, 3))
