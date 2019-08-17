// 贝壳第一题
let arr = [7,100,80,9,20,4,7,0]
let min = Infinity
let preNum
let curNum
let res = arr.reduce((pre, cur) => {
  let reduceNum = (pre - cur) > 0 ? (pre - cur) : (cur - pre)
  if (reduceNum < min) {
    min = reduceNum
    preNum = pre
    curNum = cur
  }
  return cur
})
console.log(preNum, curNum)