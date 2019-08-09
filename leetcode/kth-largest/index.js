// 在无序数组中 找出第K大的项

// [1,4,9,2,6,10] 2

var findKthLargest = function(nums, k) {
  return nums.sort((a, b) => b - a)[k - 1]
}
console.log(findKthLargest([1,4,9,2,6,10], 2))