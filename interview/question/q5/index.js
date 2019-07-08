// 数组去重

function uniq1(arr) {
  return [...new Set(arr)]
}
console.log(uniq1([3, 5, 9, 3, 2, 3, 9]))

function uniq2(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) == -1) {  // includes  返回T/F
      result.push(arr[i])
    }
  }
  return result
}
console.log(uniq2([3, 5, 9, 3, 2, 3, 9]))

function uniq3(arr) {
  let map = new Map()
  let result = new Array()
  for(let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], true)
    } else {
      map.set(arr[i], false)
      result.push(arr[i])
    }
  }
  return result
}
console.log(uniq3([3, 5, 9, 3, 2, 3, 9]))

function uniq4(arr) {
  return arr.reduce((pre, cur) => pre.includes(cur) ? pre : pre.concat(cur), [])
}
console.log(uniq4([3, 5, 9, 3, 2, 3, 9]))
