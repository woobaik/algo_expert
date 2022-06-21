const arr = [0, 1, 3, 0, 0, 12, 11];
//  /\
// find zero
// find non-zero
// while zero hits the end
// if (findZero) switch findzero to nonzero and move zero TO next
// if (non-zero) swith non-zero to switch and move zero nonzero to next

const moveZeros = (arr) => {
  let nonZero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[nonZero];
      arr[nonZero] = temp;
      nonZero += 1;
    }
  }
  return arr;
};

console.log(moveZeros(arr));
