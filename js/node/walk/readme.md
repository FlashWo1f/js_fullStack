- readdir
    读目录里的内容  IO操作异步
    readdirSync     Async  异步   Sync 同步

    JS 是单线程的，用回调或Promise， 释放主线程的控制权
    主要因为JS是前端DOM的变成， 用户交互比较多， 等到执行完后，
    再通过event-loop机制， 拿回控制权(callback, resolve)

    来到了node， js 获取了服务器端的能力
    readdirSync()  拿到控制权，执行完再释放控制权