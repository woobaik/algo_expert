const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  if (target > arr[right] || target < arr[left]) {
    return false;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};

console.log(binarySearch(arr, 9));
