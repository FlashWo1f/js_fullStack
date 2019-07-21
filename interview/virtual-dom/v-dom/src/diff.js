// 都是在内存中的虚拟dom树
function diff(oldTree, newTree) {
  // 声明变量patches用来存放补丁的对象
  let patches = {}
  let index = 0   // 第几个节点的改变
  // 递归遍历树
  walk(oldTree, newTree, index, patches)
  return patches
}
function walk(oldNode, newNode, index, patches) {
  // props, children
  let current = []  // 补丁的数组
  if (!newNode) {
    current.push({ type: 'REMOVE', index})
  } else if (isString(oldNode) && isString(newNode)) {  // isString()  代表只有文本没有标签
    // 文本节点
    if (oldNode !== newNode) {
      current.push({ type: 'TEXT', text: newNode})
    }
  }else if (oldNode.type === newNode.type) {
    // 属性 子节点
    // 属性是否修改
    let attr = diffAttr(oldNode.props, newNode.props)
    if (Object.keys(attr).length > 0) {
      current.push({type: 'ATTR', attr})
    }
    diffChildren(oldNode.children, newNode.children, patches)
  } else {
    // 是节点 但是类型不一样
    current.push({type: 'REPLACE', newNode})
  }
  if (current.length) {
    patches[index] = current
  }
}
function isString(obj) {
  return typeof obj === 'string'
}
function diffAttr(oldAttrs, newAttrs) {
  let patch = {}
  for(let key in oldAttrs) {
    if (oldAttrs[keys] !== newAttrs[key]) {
      patch[key] = newAttrs[key]
    }
  }
  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      patch[key] = newAttrs[key]
    }
  }
  return patch
}
// 所有都基于一个序号来实现
let num = 0

function diffChildren(oldChildren, newChildren, patches) {
  oldChildren.forEach((child, index) => {
    walk(child, newChildren[index], ++num, patches)
  })
}
function doPatch(node, patches) {
  
}

export default diff