function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

let a1 = new TreeNode(1)
let a2 = new TreeNode(2)
let a3 = new TreeNode(3)
a1.right = a2
a2.left = a3

function inorderTraversal(root) {
  let arr = []
  // 每个inorder负责一次的小树单元的遍历
  const inorder = (root) => {
    if(root === null) return null
    inorder(root.left)
    arr.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return arr
}
console.log(inorderTraversal(a1))