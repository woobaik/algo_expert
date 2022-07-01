const treeMin = (tree) => {
  const stack = [root];
  let min = Infinity;
  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode.val < min) min = currentNode.val;
    if (currentNode.left) stack.push(currentNode.left);
    if (currentNode.right) stack.push(currentNode.right);
  }

  return min;
};
