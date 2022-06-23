const alphabetSeq = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i].charCodeAt(0) >= str[i + 1].charCodeAt(0)) {
      return false;
    }
  }

  return true;
};

console.log(alphabetSeq("bxz"));
