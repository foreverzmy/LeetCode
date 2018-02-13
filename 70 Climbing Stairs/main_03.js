/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i % 3] = dp[(i - 1) % 3] + dp[(i - 2) % 3]
  }
  return dp[n % 3];
};