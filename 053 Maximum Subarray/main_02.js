/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const size = nums.length;
  if (size === 0) return 0;
  else if (size === 1) return nums;

  // 因为reduce最后总返回最后一个子串的和数，所以需要外部保存一下
  let max = Number.NEGATIVE_INFINITY;
  nums.reduce((prevSum, curVal) => {
      const newSum = prevSum + curVal;
      max = Math.max(max, newSum);
      if (newSum < 0) {
          return 0;
      }
      return newSum;
  }, 0);
  return max;
};