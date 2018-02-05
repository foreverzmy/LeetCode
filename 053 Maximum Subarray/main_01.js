/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums || nums.length === 0) return 0;

  var sum = 0;
  var maxSum = nums[0];
  for (val of nums) {
    if (val >= sum + val) {
      sum = val;
    } else {
      sum = sum + val;
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return max;
};
