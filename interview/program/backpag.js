/**
 * 现在给出该种物品的数量、体积、价值的数值，
 * 希望你能够算出怎样能使背包的价值最大的组合方式，并且输出这个数值
 * 对于30%的数据 1<=v<=500 1<=n<=2000 1<=m<=10 1<=w<=20 1<=s<=100 
 * 输入 
    第1行有2个整数，物品种数n和背包装载体积v; 
    第2行到i+1行每行3个整数，为第i种物品的数量m、体积w、价值s。
  输出 
    仅包含一个整数，即为能拿到的最大的物品价值总和。 
    样例说明：选第一种一个，第二种两个，结果为3*1+5*2=13
  输入示例： 
    2 10 
    3 4 3 
    2 2 5 
  输出示例： 
    13 
 */
function bestPushIn(info) {
  let cate = info[0][0]
  let v = info[0][1]
  let pro = info.slice(1)
  let maxUseItem = 0
  let maxUse = pro.map((item, index) => {
    if(item[2] / item[3] > maxUseItem)
    maxUseItem = item[2] / item[1]
  })
}