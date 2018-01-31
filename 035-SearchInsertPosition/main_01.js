/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (!nums || nums.length === 0) {
    return 0
  }
  var low = 0;
  var high = nums.length - 1;
  while (low <= high) {
    var mid = ~~((low + high) / 2);
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
};