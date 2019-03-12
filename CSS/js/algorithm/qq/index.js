// let qq_number = "631758924qq";
// 函数表达式
/**
 * 
 * @param {*} qq type String
 * @return type Bool
 * @功能 判断QQ号是否合格
 * @desc  只能是数字 长度5位号以上  13位以上
 */
// const is_valid_qq = (qq) =>{
//     if(!qq) return false;
//     if(/^[0-9]{5,13}$/.test(qq))
//     {
//         return true;
//     }else{
//         return false;
//     }
// };
// console.log(is_valid_qq(qq_number));
//选择了一种数据结构  数组
let enc_qq = [6,3,1,7,5,8,9,2,4],qq = [],head = 0,tail = enc_qq.length;
//head指针  start 开始
// 尾部指针 end 
// 拿到一个正确的数字，操作原来的两个数字
while(head < tail)
{   
    qq.push(enc_qq[head]);
    head++;
    // 第二个数移到队尾？
    enc_qq[tail] = enc_qq[head];
    // 删除它？shift?
    tail++;
    head++;
}
console.log(qq);
// console.log(enc_qq);


