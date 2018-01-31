/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const length = prices.length;
  let profit = 0;
  for (let i = 0; i < length - 1; i++) {
    const diff = prices[i + 1] - prices[i];
    if (diff > 0) {
      profit += diff;
    }
  }
  return profit;
};
