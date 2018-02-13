/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) {
    return 0;
  }

  let max = Math.max(nums[0], nums[1]);
  let sec = Math.min(nums[0], nums[1]);

  let maxIdx = max === nums[0] ? 0 : 1;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > max) {
      maxIdx = i;
      sec = max;
      max = nums[i];
    } else if (nums[i] > sec) {
      sec = nums[i];
    }
  }

  if (max / 2 >= sec) {
    return maxIdx;
  }
  return -1;
};