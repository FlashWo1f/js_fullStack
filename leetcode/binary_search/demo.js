function binary_search(arr, data){
    // 递归
    let max = arr.length - 1,
    min = 0,
    mid
    while(max >= min){
        // mid = parseInt(min + (max - min) / 2)
        // 考虑到max很大 出现溢出 导致数组访问出错
        mid = parseInt(min + ((max - min) >>> 1))
        if(data < arr[mid]){
            max = mid - 1
        }else if(data > arr[mid]){
            min = mid + 1
        }else{
            return mid 
        }

    }
    return -1
}   
// console.log(binary_search([1,2,3,6,9,10,32,112],10))
let arr = []
for(let i = 0; i < 10000000; i++){
    arr.push(i)
}
console.log(binary_search(arr, 2019))