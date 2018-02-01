/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const length = nums.length;
  const fullSum = length * (length + 1) / 2;
  const numsSum = nums.reduce((pre, cur) => pre + cur);
  return fullSum - numsSum;
};
