const arr = [1, 8, 2, 9, 2, 3, 6];

const findPivot = (arr) => {
  const sum = arr.reduce((current, result) => current + result, 0);
  let left = 0;
  let right = sum;
  let prevPivot = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(`i ${left} ${right}`);
    left += prevPivot;
    right -= arr[i];

    if (left === right) {
      return arr[i];
    }
    prevPivot = arr[i];
  }

  return -1;
};

console.log(findPivot(arr));
