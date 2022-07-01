class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }
}

const newNode = new Node(5);
newNode.left = new Node(3);
newNode.right = new Node(7);
const newTree = new Tree(newNode);

const dfs = (tree, value) => {
  const stack = [tree.root];
  const seen = {};

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode.vaule === value) {
      return true;
    }
    console.log("currentNode", currentNode);
    if (currentNode.left) {
      stack.push(currentNode.left);
    }

    if (currentNode.right) {
      stack.push(currentNode.right);
    }
  }
  return false;
};
