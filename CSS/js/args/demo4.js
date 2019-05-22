const err = (message) => {
    throw new Error(message)
}
function sum(num = err('first param is not defined'), otherNum = err('second param is not defined')){
    return num + otherNum
}
// console.log(sum(1, 2))  3
// console.log(sum(undefined, 10)) 报错 第一参数没定义
// console.log(sum(10))  报错 第二参数没定义
console.log(sum(undefined, 1))