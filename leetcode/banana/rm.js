// 移位运算
// 二进制位的运算
// 11(10) => 0000 1011(2)
// >>右移位运算
// 0000 1011 >>2  0000 0010
// 0000 1011 >>1  0000 0101
// 右移移位   快速实现除以2   左移反之
// 计算机内部运算的真实
//console.log(100 >> 2);
// function comp(array1, array2){
//     //your code here
//     if(array1 == "" || array2 == "")
//     {
//       return false
//     } 
//     if(array1.sort(function(a,b){return a - b}).map(function(a){return a*a}) == array2.sort(function(a,b){return a - b}))
//     {
//       return true
//     }else{
//       return false
//     }
//   }
//   console.log(comp([47, 88, 1, 90, 33, 79, 47],[2209, 7744, 1, 8100, 1089, 6241, 2209]))
//   console.log([47, 88, 1, 90, 33, 79, 47].sort(function(a,b){return a - b}).map(function(a){return a*a}))
//   console.log(([47, 88, 1, 90, 33, 79, 47].sort(function(a,b){return a - b}).map(function(a){return a*a})).toString() === ([2209, 7744, 1, 8100, 1089, 6241, 2209].sort(function(a,b){return a - b})).toString())
function findNb(m) {
    // your code
    for(var n = 0, num = 0; n < Math.sqrt(m); n++)
    {
      if(num == m){
        return n -1
      }else{
        num += Math.pow(n,3)
      }
    }
    return (-1);
}
console.log(findNb(4183059834009))