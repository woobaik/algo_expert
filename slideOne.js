const str = "crazy";

const slide = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArr = alphabet.split("");

  const inputArr = str.split("");

  for (let i = 0; i < inputArr.length; i++) {
    let newAlphPosition = (alphabet.indexOf(inputArr[i]) + 1) % 26;
    inputArr[i] = alphabetArr[newAlphPosition];
  }

  return inputArr.join("");
};

console.log(slide("crazy"));
