/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let maxCount = 1;
  let dict = {};
  let minLength = nums.length;
  nums.forEach((num, idx) => {
    if (dict[num]) {
      dict[num][0]++;
      dict[num][2] = idx;
      maxCount = Math.max(maxCount, dict[num][0]);
    } else {
      dict[num] = [];
      dict[num][0] = 1;
      dict[num][1] = idx;
      dict[num][2] = idx;
    }
  });

  for (let idx in dict) {
    if (dict[idx][0] === maxCount) {
      minLength = Math.min(minLength, dict[idx][2] - dict[idx][1] + 1);
    }
  }
  return minLength;
};

findShortestSubArray([1, 2, 2, 3, 1]);
