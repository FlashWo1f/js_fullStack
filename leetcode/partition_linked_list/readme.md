- 抽象能力 ADT 具象来引导
- 链式调用 设计模式
- 解决特定问题
  1. leetcode 数据结构题  LinkedList
  2. github algorithm OO写法
  封装成class export default
  3. webpack 可见即可得

- 有一个链表  服务于各种算法
1 -> 4 -> 3 -> 2 -> 5 -> 2
存放数据, 不连续的
head 1
- node(n)->linkedlist
  模块化 之后可以引入 一个文件一个类
  es6模块化
  append()
- index.js
  业务代码

- node 不支持es6 模块化
原生支持的是require commonJS
compile presets

- ADT
  抽象数据类型
  链表 数据结构  配套方法
  append()
  toString()
  toArray()

head = 1->4->3->2->5->2  x = 3
对链表进行分割 小于x的节点放在左边 大于x放在其右边 不影响之前的顺序
1->2->2 左链表  之前
4->3->5 右链表  之后
链表 head tail  append()
两个链表  首位相连 tail1.next = head2