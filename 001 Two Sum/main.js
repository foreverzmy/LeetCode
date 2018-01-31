/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  map = {};
  for (let idx in nums) {
    if (!dict[target - nums[idx]]) {
      dict[nums[idx]] = idx;
    } else {
      return [~~dict[target - nums[idx]], ~~idx];
    }
  }
};
