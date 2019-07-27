function fmp(nums) {
  if(!nums.length) return 1
  let newNum = nums.sort((a, b) => a - b)
  let newfilter = newNum.filter(item => item > 0)
  if (newfilter[0] > 1) return 1
  for(let i = 0; i < newfilter.length - 1; i++) {
      if (newfilter[i + 1] !== newfilter[i] + 1)
          return newfilter[i] + 1
  }
  return newfilter[newfilter.length - 1] + 1
}
console.log(fmp([0]))