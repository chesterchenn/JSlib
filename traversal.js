/**
 * 使用递归方式先序遍历 DOM 树
 * @param node 要遍历的节点
 */
function traversal(node) {
  if (node && node.nodeType ===1) {
    console.log(node.tagName);
  }
  var i = 0, childNodes = node.childNodes, item;
  for (; i < childNodes.length; i++) {
    item = childNodes[i];

    if (item.nodeType === 1) {
      traversal(item)
    }
  }
}
