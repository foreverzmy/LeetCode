/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const length = cost.length;
  let dp = [];
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
  }
  return dp[length];
};

minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])