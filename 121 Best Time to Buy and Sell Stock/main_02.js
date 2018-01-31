/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) return 0;
  let max = 0;
  let minP = prices[0];
  const length = prices.length;
  for (let i = 1; i < length; i++) {
    let curP = prices[i];
    if (minP < curP && max < curP - minP) {
      max = curP - minP;
    }
    if (minP > curP) minP = curP;
  }
  return max;
};
