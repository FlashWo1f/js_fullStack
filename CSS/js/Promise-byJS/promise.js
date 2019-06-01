function MyPromise(callback){
    var self = this
    // state 装载状态 resolve reject ...
    var state = null
    // 记录resolve的参数
    var param = null

    // 执行传入的**并改变promise对象的状态
    callback(resolve, reject)
    // resolve 方法
    function resolve(data){
        let parmise
        // 改变状态
        state = true
        param = data
        nextResolve(asynconFulfilled(param))
        // 执行记录onFulfilled
        parmise = asynconFulfilled(param)
        if(parmise === undefined){
            // 不能解析parmise.constructor
        }else if(parmise.constructor === self.constructor) {
            // 等待传递进来的promise 对象执行完毕， 
            // 然后根据传递进来的promsie对象的状态执行resolve或reject
            // 注意 这个param是个形参, 在then方法的promise中执行
            promise.then(function(param){
                resolve(param)
            }, function(param){
                reject(param)
            })

        }else{
            // 这是前面的.then方法 没有返回promise对象
            resolve(promise)
        }
    }
    // reject 方法
    function reject(err){
        state = false
        param = err
        nextReject(asynconRejected(param))
    }
    var nextResolve = null
    var nextReject = null
    // 记录then方法的参数, onFulfilled onRejected
    var asynconFulfilled = null
    var asynconRejected = null

    this.then = function(onFulfilled, onRejected){
        // 返回一个新的Promise对象
        return new self.constructor(function(resolve, reject){
            if(state){
                // param 是 promise 对象完成后的结果
                resolve(onFulfilled(param))
            }else if(!state){
                reject(onRejected(param))
            }else{
                // 没执行完
                nextResolve = resolve
                nextReject = reject
                asynconFulfilled = onFulfilled
                asynconRejected = onRejected
            }
        })
    }
}