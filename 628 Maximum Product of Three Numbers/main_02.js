/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;

  nums.forEach(val => {
    if (val < min1) {
      min2 = min1;
      min1 = val;
    } else if (val < min2) {
      min2 = val;
    }
    if (val > first) {
      third = second;
      second = first;
      first = val;
    } else if (val > second) {
      third = second;
      second = val;
    } else if (val > third) {
      third = val;
    }
  });
  return Math.max(min1 * min2 * first, first * second * third);
};
