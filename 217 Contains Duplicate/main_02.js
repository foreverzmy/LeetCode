/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();

  for (let val of nums) {
    if (set.has(val)) {
      return true;
    } else {
      set.add(val);
    }
  }
  return false;
};