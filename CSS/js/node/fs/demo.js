// fs模块 是node后端开发的一部分
const fs = require('fs');
// 读文件是异步的
// fs.readFile('./a.txt', 'utf8', function(err, data){
//     console.log(data)
//     fs.readFile('./b.txt', 'utf8', function(err, data){
//         if(err){
//             console.log(err)
//         }
//         console.log('------', data)
//     })
// })
// 将callback处理异步的方案抛弃
// 封装一个异步任务 Promise
const fileAPromise = new Promise((resolve, reject) => {
    // 把耗时的任务放进来
    fs.readFile('./a.txt', 'utf8', (err, data) => {
        //流程的控权怎么交接
        if(data){
            resolve(data)
        }else{
            reject(err)
        }
    })
})
const fileBPromise = new Promise((resolve, reject)=>{
    fs.readFile('./b.txt', 'utf8', (err, data)=>{
        if(err){
            reject(err)
        }else{
            resolve(data)
        }

    })
})
// 将内部的耗时内务运行起来
fileAPromise
    .then(data => {
        console.log(data)
        return fileBPromise;  
    })
    .then(data => console.log(data))
    
