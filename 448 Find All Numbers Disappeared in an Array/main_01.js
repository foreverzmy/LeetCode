/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    const tmp = nums[i];
    if (nums[tmp - 1] !== tmp) {
      nums[i] = nums[tmp - 1];
      nums[tmp - 1] = tmp;
      i--;
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] - 1 !== i) {
      result.push(i + 1)
    }
  }
  return result;
};