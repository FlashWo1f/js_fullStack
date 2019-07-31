const fs = require('fs')
fs
  .createReadStream('./sample.txt')  // 读 给个地址  来源  流
  .pipe(process.stdout)  // 管道    