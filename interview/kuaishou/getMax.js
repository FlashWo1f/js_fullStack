var str = 'abcdeffggghhhhiiiii'
let newStr = str.split('').reduce((pre, cur) => {
  if (cur in pre) {
    pre[cur] += 1
  } else {
    pre[cur] = 1
  }
  return pre
}, {})
let result = 1
let resultStr = ''
for(key in newStr) {
  if (newStr[key] > result){
    result = newStr[key]
    resultStr = key
  }
}
console.log(resultStr, result)
console.log(newStr)