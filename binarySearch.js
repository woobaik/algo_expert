const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log("left", left);
    console.log("mid", mid);
    console.log("right", right);
    if (arr[mid] < target) {
      left = mid;
    } else if (arr[mid] > target) {
      right = mid;
    } else {
      return true;
    }
  }
  return false;
};

console.log(binarySearch(arr, 9));
