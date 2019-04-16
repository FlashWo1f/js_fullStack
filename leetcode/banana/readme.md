蜗牛爱吃香蕉

N piles banana 每pile banana 有不同数量的香蕉
 这里有4piles 香蕉
[3,6,7,11]
5piles
[30,11,23,4,20]
每个小时可以吃某一piles 里的n只香蕉, 规定H小时内吃完， 吃每把的时候要不就是吃m只, 要不就是吃剩下的

koko bananas
- 把香蕉吃完 canEatAllBananas
    h 来自于吃法规则  一小时mid, 一次只吃一把
    return h >= H
- while 疯狂地试
1.2.3.4.5.6.7.8...  Math.max(...piles)
这样能拿到结果 ，但是太慢了
中间  最大概率最快的， 二分查找
二分查找优化查找的结果

简单查找  时间开销是n 
二分查找的写法是有规律的
x   y 要找的是最小可以min 
可以来优化的， 找中间 mid = x + ((y - x) >> 1)， 
小了mid + 1 新的x
大了mid -1 新的y

