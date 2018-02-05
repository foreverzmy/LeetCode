/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let max = -Infinity;
  let snd = -Infinity;
  let thd = -Infinity;
  nums.forEach(val => {
    if (val > max) {
      thd = snd;
      snd = max;
      max = val;
    } else if (val > snd && val < max) {
      thd = snd;
      snd = val;
    } else if (val > thd && val < snd) {
      thd = val;
    }
  });
  if (thd === -Infinity) {
    return max;
  }
  return thd;
};
