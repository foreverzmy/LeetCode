/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort((a, b) => a - b);
  const length = nums.length;
  let max = nums[length - 1] * nums[length - 2] * nums[length - 3];
  max = Math.max(max, nums[0] * nums[1] * nums[length - 1]);
  return max;
};
