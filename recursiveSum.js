const recursiveSum = (num) => {
  if (num < 1) {
    return 0;
  }

  return num + recursiveSum(num - 1);
};

console.log(recursiveSum(3));
