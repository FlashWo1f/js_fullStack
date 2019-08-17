let promise = new Promise((resolve, reject) => {
  console.log('aaa')
  resolve('bbb')
  // return 'bbb'   不可行  一定要把状态改变才能触发.then里面的回调函数
})
promise.then(res => {
  console.log(res)
  // Promise.resolve('ccc')
  // return 'ccc'   这可行   返回的值  作为第二个.then 的回调函数的参数
  // return Promise.reject('ccc')
  return 'ccc'
}).then(res => {
  console.log(res)
}).catch(rej => {
  console.log('sdas', rej)
})