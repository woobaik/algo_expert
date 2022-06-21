const arr = [-9, -8, -2, 1, 2, 3, 4, 5, 6, 7, 9];

const sortedSq = function (arr) {
  let start = 0;
  let end = arr.length - 1;
  let idx = arr.length - 1;
  const result = new Array(10);

  while (start <= end) {
    if (Math.abs(arr[start]) > Math.abs(arr[end])) {
      result[idx] = arr[start] * arr[start];
      start += 1;
    } else {
      result[idx] = arr[end] * arr[end];
      end -= 1;
    }
    idx -= 1;
  }
  return result;
};

console.log(sortedSq(arr));
console.log(Math.abs(-9));
