const arr = [3, 6, -2, -5, 7, 3];

const adjProduct = (arr) => {
  let max = -Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    const product = arr[i] * arr[i + 1];
    if (product > max) {
      max = product;
    }
  }

  return max;
};

console.log(adjProduct(arr));
