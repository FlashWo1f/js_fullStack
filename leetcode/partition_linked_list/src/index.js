import LinkedList from './LinkedList'

const partition = (head, x) => {
  // 分成两个节点来做
  let cur = head,
      next,
      preHead,
      preTail,
      afterHead,
      afterTail

  if (head === null) 
    return null
  while (cur) { // 一次遍历
    next = cur.next
    cur.next = null   // 切断之前的关系
    if (cur.value < x){
      if (!preHead) {
        preHead = cur
        preTail = cur
      } else {
        preTail.next = cur
        preTail = cur
      }
    } else{
      if (!afterHead) {
        afterHead = cur
        afterTail = cur
      } else {
        afterTail.next = cur
        afterTail = cur
      }
    }
    cur = next
  }
  if (preTail) {
    preTail.next = afterHead
    return preHead
  } else {
    return afterHead
  }
}
const list = new LinkedList()
list
  .append(1)
  .append(4)
  .append(3)
  .append(2)
  .append(5)
  .append(2)

// console.log(list.toString())

const newHead = partition(list.head, 3)
console.log(newHead)