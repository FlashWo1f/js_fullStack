// 102 二叉树的层次遍历
// 把每一层的节点放在每一个数组
// [[3], [9, 20], [15, 7]]
// 按层 每个节点把子节点告诉 算法就好
// 子节点也可能有子节点
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

var a1 = new TreeNode(3)
var a2 = new TreeNode(9)
var a3 = new TreeNode(20)
var a4 = new TreeNode(15)
var a5 = new TreeNode(7)
a1.left = a2
a1.right = a3
a3.left = a4
a3.right = a5

function levelOrderTravesal (root) {
  if(!root) return []
  const items = []
  const queue = [root, null]  // 队列， 等待被了解情况的节点 出队
  let levelNodes = []  // 每一层的节点
  while(queue.length > 0) {
    const t = queue.shift()
    if(t){
      levelNodes.push(t.val)
      if(t.left) {
        queue.push(t.left)
      }
      if(t.right) {
        queue.push(t.right)
      }
    }else{
      // null 层次分隔符
      items.push(levelNodes)
      levelNodes = []
      // 每次一层得遍历
      if (queue.length > 0) {
        queue.push(null)
      }
    }
  }
  return items
}


console.log(levelOrderTravesal(a1))