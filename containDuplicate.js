const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

const containDuplicate = (nums) => {
  const obj = {};

  for (let num of nums) {
    if (obj[num]) {
      return true;
    } else {
      obj[num] = true;
    }
  }

  return false;
};

console.log(containDuplicate(nums));
