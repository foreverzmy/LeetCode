/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  let dict = {};
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const tmp = nums[i];
    if (dict[tmp] === undefined) {
      dict[tmp] = 1;
    } else {
      dict[tmp]++;
    }
  }

  for (let key in dict) {
    if (k === 0 & dict[key] > 1) {
      count++;
    }
    if (k > 0 && dict[~~key + k]) {
      count++;
    }
  }

  return count;
};

console.log(findPairs([1, 1, 3, 3, 1], 2))