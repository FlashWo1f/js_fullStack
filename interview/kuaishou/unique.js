// 要去重 有妙法
// 循两次 内达值
// 要少循 用索引
// 先排序 前后重
// 可map  可set

function unique(arr) {
  var res = []
  var sortedArray = arr.concat([]).sort()
  console.log(sortedArray)
  var seen
  for (var i = 0, len = sortedArray.length; i < len; i++) {
    if (!i || seen !== sortedArray[i]) {
      res.push(sortedArray[i])
    }
    seen = sortedArray[i]
  }
  return res
}
console.log(unique(['1',1,1,'1',2,'poa',16,'poa'])) // 有点问题  有缺陷
let set = new Set(['1',1,1,'1',2,'poa',16,'poa'])
console.log([...set])

function filter(arr) {
  let res = arr.filter((item, index, arr) => {
    return arr.indexOf(item) === index
  })
  return res
}
console.log('filter', filter(['1',1,1,'1',2,'poa',16,'poa']))