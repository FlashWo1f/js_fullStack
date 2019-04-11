node 让JS 来到了后端

服务器， Linux
文件系统操作  fs
连接数据库  db

文件读取是要花时间的， 因为要文件定位参数1   打开文件，
将文件内容读到内存中   输出到命令行  文件越大时间越多
要花时间的操作在js里就是异步的
1. callback 回调函数
fs.readfile(path, 'utf8', function(err, data){

})
2. promise 封装一个异步任务
  分开，Promise 是类 用于处理耗时异步问题的类，为了防止回调地狱，
  看到耗时问题就用出一个Promise实例
  resolve 将控制权交接给then  保证异步问题的同步化  将结果通过resolve(data)
  reject 失败 catch(e){...}