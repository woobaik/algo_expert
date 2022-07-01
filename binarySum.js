//         3

//     11     4

//   4     2       1

const binarySum = (tree) => {
  if (tree.root === null) return 0;

  return binarySum(tree.left.value) + binarySum(tree.right.value) + tree.root;
};
