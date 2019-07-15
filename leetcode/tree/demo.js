function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
// 不用递归

let a1 = new TreeNode(1)
let a2 = new TreeNode(2)
let a3 = new TreeNode(3)
a1.right = a2
a2.left = a3

var inorderTraversal = (root) => {
  var stack = []; // 堆栈
  var result = []  // 左边出来了
  var cur
  cur = root
  // 未处理
  while (stack.length > 0 || cur !== null) {
    // 节点不为空
    if (cur !== null) {
      stack.push(cur)
      cur = cur.left
    } else {
      cur = stack.pop()  // 第一次是不是最左侧的叶子
      result.push(cur.val)
      cur = cur.right
    }
  }
  return result
}

console.log(inorderTraversal(a1))