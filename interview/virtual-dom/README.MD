## VDom
就是我们用JS对象来模拟的DOM
将DOM的对比放在JS层 减少浏览器不必要的重绘 提高效率
但是VDOM不一定比真实DOM快
当我页面的DOM节点都要改变的时候
VDOM比真实DOM的流程中要多一步diff算法的对比过程
所以当有很多DOM节点和改变部分只是少部分的时候 VDOM的性能优势才能更好的体现出来


## vue react mvvm
不用去做耗费性能的DOM
不直接操作DOM  操作数据 用改变数据的DOM片段更新到页面上去
SPA -> PWA   性能好
DOM树
ComponentA  render  -> DOM树上
遍历 组件对应的树 上的节点
  Tag  node
  属性发生了改变  style
  文本改变  innerText
  ul+li   append

  oldState   oldTree
  newState   newTree  (基于oldTree 微创得到的  而非新创建的  非常高效)
  DOM树的描述  JS版本的DOM树 即V-DOM
  原来一切操作DOM的操作都是性能低下的 设计到重绘重排
  内存中有JS Virtual DOM

- elementObj   =>   新的VirtualDOM
  diff  差别变成补丁  补上DOM
          1
      2       3
    4   5   6   7

          1
      2       9
    4   5   6   8
  [
    { value: 9, index: 2},
    { value: 8, index: 6}
  ]
- 先序深度遍历
- patches [] -> diff
- 给dom打补丁