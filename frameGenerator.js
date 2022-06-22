const pic = ["123", "456"];

const frame = (pic) => {
  let topAndBottom = "";
  for (let i = 0; i < pic[0].length + 2; i++) {
    topAndBottom += "*";
  }

  const result = new Array(pic.length + 2).fill(topAndBottom);
  // equal length string <= nice!

  for (let j = 0; j < pic.length; j++) {
    result[j + 1] = `*${pic[j]}*`;
  }

  return result;
};

console.log(frame(pic));
