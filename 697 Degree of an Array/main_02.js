/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let maxCount = 1;
  let dict = {};
  let minLength = nums.length;
  nums.forEach((num, idx) => {
    dict[num] = dict[num] || [0, idx];
    dict[num][0]++;
    const length = idx - dict[num][1] + 1;
    if (dict[num][0] === maxCount) {
      minLength = Math.min(minLength, length);
    } else if (dict[num][0] > maxCount) {
      maxCount = dict[num][0];
      minLength = length;
    }
  });
  return minLength;
};

findShortestSubArray([1, 2, 2, 3, 1]);
