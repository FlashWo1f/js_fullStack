// 原生的一个模块
// 供其他模块调用  比如http res 继承自 Event
const Events = require('events')

const ev = new Events()

// 自定义事件open
ev.on('open', () => {
  console.log('open事件发生')
})
function callBack(){
  console.log('第二个open')
}
ev.on('open', callBack)

// ev.emit() 可以手动触发事件
ev.emit('open')

// 移除open事件 后不再生效
ev.removeListener('open', callBack)
ev.emit('open')

ev.once('one', (data) => {
  console.log(data)
})
ev.emit('one', 'from emit data')
ev.emit('one')
