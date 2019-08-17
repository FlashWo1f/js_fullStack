// tsc --watch main.ts
let decLiteral: number = 1
// decLiteral = '12321'
let hexLiteral: number = 0xf00d

let user_name: string = 'Bob'
let sentence: string = `Hello, my name is ${user_name}`

let list: number[] = [1, 2, 3]
// 泛型 Array<number>
let list2: Array<number> = [1, 2, 3]

function div(x) {
  // isFinite 原生判断是否是无穷大
  if (isFinite(1000 / x)) {
    return 'Number is NOT Infinity'
  }
  return 'Number is Infinity'
}
console.log(div(0))