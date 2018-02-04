/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  const set = new Set(nums);
  if (k === 0) {
    return nums.length - set.size;
  } else if (k < 0) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const tmp = nums[i];
    if (set.has(tmp + k)) {
      count++;
      set.delete(tmp + k);
    }
    if (set.has(tmp - k)) {
      count++;
      set.delete(tmp - k);
    }
    set.delete(tmp);
  }
  return count;
};

console.log(findPairs([1, 2, 3, 4, 5], -1));
