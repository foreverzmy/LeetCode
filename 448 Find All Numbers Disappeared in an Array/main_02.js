/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let result = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let tmp = nums[i];
    if (tmp < 0) {
      tmp = -tmp;
    }
    if (nums[tmp - 1] > 0) {
      nums[tmp - 1] = -nums[tmp - 1];
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};
