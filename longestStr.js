const arr = ["ab", "abc", "abd", "vbd", "dff", "13"];

const longestStr = (arr) => {
  let max = -Infinity;
  let resultArr = [];

  // loop through arr
  // if new element length is longer than max, initialize new result array
  // if  new element length is equal to max push resultArr
  // if  new element length is smaller than max, pass
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;

      resultArr = [];
    }
    if (arr[i].length === max) {
      resultArr.push(arr[i]);
    }
  }

  return resultArr;
};

console.log(longestStr(arr));
