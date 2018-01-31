/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const length = nums.length;
  let dict = {};
  for (let val of nums) {
    if (dict[val]) {
      dict[val] += 1;
    } else {
      dict[val] = 1;
    }
    if (dict[val] > length / 2) {
      return val;
    }
  }
};
