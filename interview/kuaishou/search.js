// let arr = [1,2,3,4,5,6] 

// console.log(arr.findIndex(item => item === 2))

// 快速排序  nLogn

function binary(arr, n) {
  let max = arr.length - 1
  let min = 0
  while(max >= min) {
    let middle = Math.floor(min + (max - min) / 2)
    if (n > arr[middle]) {
      min = middle + 1
    }
    else if (n < arr[middle]) {
      max = middle - 1
    } else {
      return middle
    }
  }
  return false
}
console.log(binary([1,2,3,4,5,6], 6))
