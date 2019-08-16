/**
 * value先存本次循环的arr[i]
 * j 会记录 本次循环的arr[i]应该在哪里
 * 如果前面的数比本次循环的大就都往后移一位
 * 最后根据j把预先存好的value放在arr[j+1]
 * 插入排序就好像我们打扑克牌排序一样
 */
function insertSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let j
    let value = arr[i]
    for(j = i - 1; j >= 0; j--){
      if (arr[j] > value) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = value
  }
  return arr
}

console.log(insertSort([3,15,2,9,10,11,28,6]))