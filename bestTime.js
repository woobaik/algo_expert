const prices = [7, 1, 5, 3, 6, 4];

const best = (prices) => {
  let max = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }

  return max;
};

console.log(best(prices));
