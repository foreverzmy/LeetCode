/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  idx = 0;
  while (idx < nums.length) {
    if (nums[idx] === val) {
      nums.splice(idx, 1);
    } else {
      idx++;
    }
  }
};

removeElement([3, 3], 3);
