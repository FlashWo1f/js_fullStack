dom event (事件)
- dom 
  onclick 事件注册只有一个  dom-0标准
  addEventListener('click')  不限  dom-2
  addEventListener('keyup')  不限  dom-3
  3在2的基础上加了鼠标键盘事件
  dom 事件流
  捕获(capture)
  window -> document(documentElement) -> body -> parent -> target 
  冒泡(bubble)
  反之
  事件按照  dom流的顺序执行事件回调
  处于目标阶段的时候   事件调用顺序取决于事件注册的顺序

- 事件代理  （事件委托）
  event-question.html
  原理：事件冒泡到顶级 然后target得到该事件