const validP = (string) => {
  const arr = [];

  const original = string.split("");

  const obj = { "{": "}", "(": ")", "[": "]" };
  // if we meet "} ) ]" we can pop
  // if we meet "( [ {" withouht closed bracket return false

  for (let i = 0; i < original.length; i++) {
    if (obj[original[i]]) {
      //   when it is a open bracket
      arr.push(original[i]);
    } else {
      // when it is a closed bracket
      // (}
      if (original[i] !== obj[arr[arr.length - 1]]) {
        // last of the element     //
        return false;
      } else {
        arr.pop();
      }
    }
  }

  return arr.length === 0;
};

// {(})

// { ( } )

//     flase

console.log(validP("([]{})"));
