function myPromise(constructor) {
  let self = this
  self.status = "pending"
  self.value = undefined
  self.reason = undefined

  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value
      self.status = "resolved"
    }
  }
  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason
      self.status = 'rejected'
    }
  }
  // 捕获构造异常
  try {
    constructor(resolve, reject) 
  } catch (error) {
    reject(error)
  }
}

myPromise.prototype.then = function(onFullfilled, onRejected) {
  let self = this
  switch(self.status) {
    case "resolve": 
      onFullfilled(self.value)
      break
    case "rejected":
      onRejected(self.reason)
      break
    default:

  }
}

var p = new myPromise(function(resolve, reject) {
  resolve(1)
})
p.then(res => console.log(res))