// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const remove = (arr) => {
  index = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[index] = arr[i + 1];
      index += 1;
    }
  }

  return arr;
};

console.log(remove(nums));
