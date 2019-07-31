## event loop  事件队列
这是JS拿来处理 异步问题
JS是单线程的
setTimeout  async  promise
async task  进入event队列 等待执行
宏任务 微任务 队列
将回调函数加入事件队列中  task queue
将任务压入执行栈  从栈里把任务拿出来执行

macrotask  setTimeout setInterval setImmediate 

I/O UI rendering  一次执行一次

microtask  Promise  process.nextTick 优先 一次执行完

C E D A B
1. macrotasks ['A','B']
2. microtasks ['D']