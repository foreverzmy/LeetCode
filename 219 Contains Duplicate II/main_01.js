/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let dict = {};
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const val = nums[i];
    if (dict.hasOwnProperty(val)) {
      if (i - dict[val] <= k) {
        return true;
      } else {
        dict[val] = i;
      }
    } else {
      dict[val] = i;
    }
  }
  return false;
};

result = containsNearbyDuplicate([-1, -1], 1)
console.log(result)