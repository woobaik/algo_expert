const arr = [1, 2, 3, 2, 1];

// iterate over the arr
// compare index element and index + 1  element
// if it is decrease counter += 1
// extra => if  counter finds more than 2, break (no need to iterate anymore)

const almostIncrease = (arr) => {
  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      counter += 1;
    }

    if (counter === 2) {
      return false;
    }
  }

  return true;
};

console.log(almostIncrease(arr));
