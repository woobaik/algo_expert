const areYouEqual = (a, b, c, d) => {
  const you = [a, b];
  const friend = [c, d];

  return (
    Math.max(...you) === Math.max(...friend) &&
    Math.min(...you) === Math.min(...friend)
  );
};

console.log(areYouEqual(10, 15, 15, 9));
