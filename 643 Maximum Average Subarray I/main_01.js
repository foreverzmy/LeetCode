/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let sum = 0;
  let max = 0;
  if (k === 1) {
    return Math.max(...nums);
  }

  for (let i = 0; i < k; i++) {
    sum += nums[i];
    max = sum;
  }
  for (let j = 0; j < nums.length - k; j++) {
    sum = sum - nums[j] + nums[j + k];
    max = Math.max(max, sum);
  }
  return max / k;
};

console.log(findMaxAverage([4, 2, 1, 3, 3], 1));
