/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  const length = nums.length;
  if (length === 0) {
    return 0;
  }
  let max_count = 1;
  let count = 1;
  for (let i = 1; i < length; i++) {
    if (nums[i] > nums[i - 1]) {
      count++;
      max_count = Math.max(max_count, count);
    } else {
      count = 1;
    }
  }
  return max_count;
};
