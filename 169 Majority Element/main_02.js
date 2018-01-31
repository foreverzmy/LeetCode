/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let tmp = nums[0];
  let count = 1;
  const length = nums.length;
  for (let i = 1; i < length; i++) {
    if (count === 0) {
      tmp = nums[i];
      count++;
    } else if (tmp === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return tmp;
};
