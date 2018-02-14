/**
 * @param {number[]} costs
 * @return {number}
 */
var minCost = function (costs) {
  const length = costs.length;
  if (length === 0) {
    return 0;
  }

  let dp = [];

  for (let i = 0; i < length; i++) {
    dp[i] = [];
    dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }

  return Math.min(dp[length - 1][0], dp[length - 1][1], dp[length - 1][2]);
}