let arr = []; //数据集合
arr.push("{");
// console.log(arr,arr.length);
// console.log(typeof arr);   //在JS里数组也是对象的一种
arr.push("}");
// console.log(arr);
arr.pop();
// console.log(arr);
arr.unshift("]");//将元素插入最前面
//console.log(arr);
arr.shift();
//console.log(arr);
arr.forEach(item =>{
    //console.log(item);
})
   
// 如何来做匹配规则
 let obj = {};
 obj["{"] = "}";
 obj["["] = "]";
 obj["("] = ")";
//  "()"; sta[0] = "(" ")"
let sta = ["("];
let s = ")";
if(obj[sta[sta.length-1]] === s){
    sta.pop();
}
console.log(!sta.length);