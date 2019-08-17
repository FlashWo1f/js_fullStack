function poa(arr) {
  let newArr = arr.sort((a, b) => {
    return (a.toString() + b) - (b.toString() + a)
  })
  return newArr.join('')
}

console.log(poa([31, 12, 105]))

// 找到组合起来最小的数