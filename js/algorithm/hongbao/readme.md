如何实现红包算法
固定金额的红包，由若干个人来抢，，规则？

1. 抢到金额之和等于红包金额，不能超过  也不能少于。
2. 手气王，0.01 至少，
3. 金额随机，随机数，公平，每个人抢到金额的概率要相同

计算过程， 变量计算的本质
发钱？  total = restAmount --
restNum -- = num
随机一次  restAmount = total - 随机数
随后  restAmount = reAmount -随机数
最后一个人拿最后的钱  for(i = 0 ; i < num-1 ; i++)
每次随机，钱数是我们需要的， push 到数组里，
要使总和
Math是数学对象
Math.random() 取随机数
parseFloat() 解析为浮点数
类型转换 "12.2" => 12.2  parseFloat
parseFloat(Math.random()).toFixed(2)
console.log(Math.floor(2.3))  =>向下取整  2
console.log(Math.ceil(2.3))  shang 

取0-9之间的整数 parseFloat(Math.random().toFixed(1)*10)
Math.floor(Math.random()*10)

let max = 100;
let min = 0;
取最小和最大直接的数 min + Math.floor(Math.random()*(max-min));