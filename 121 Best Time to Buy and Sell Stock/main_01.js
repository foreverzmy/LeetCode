/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  const length = prices.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (prices[j] - prices[i] > max) {
        max = prices[j] - prices[i];
      }
    }
  }
  return max;
};
