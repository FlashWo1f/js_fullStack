// 时间复杂度 O(n*n)
// 优化: 冒泡有一个最大的问题就是这种算法不管不管你有序还是没序，闭着眼睛把你循环比较了再说。
// 优化方案  在操作之前判断目标数组是否已经是排序好了的

function bubble(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1])
      {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(bubble([2,1,9,6,4,5,3,7]))
