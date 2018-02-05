/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  const length = nums.length;
  let max = nums[0];
  let min = nums[length - 1];
  let start = -1;
  let end = -2;
  for (let i = 1; i < length; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[length - i - 1]);
    if (max > nums[i]) {
      end = i;
    }
    if (min < nums[length - i - 1]) {
      start = length - i - 1;
    }
  }
  return end - start + 1;
};
