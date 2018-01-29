/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length == 0) return 0;
  var cur = 0;
  while (cur < nums.length) {
    if (nums[cur] !== nums[cur + 1]) {
      cur++;
    } else {
      nums.splice(cur + 1, 1);
    }
  }
  return nums.length;
};
