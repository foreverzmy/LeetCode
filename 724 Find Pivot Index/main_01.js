/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const length = nums.length;
  if (length < 3) {
    return -1;
  }

  const sum = nums.reduce((pre, cur) => pre + cur);
  let leftSum = 0;
  let rightSum = sum;

  if (rightSum - nums[0] === 0) {
    return 0;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    rightSum = sum - leftSum - nums[i + 1];
    if (leftSum === rightSum) {
      return i + 1;
    }
  }
  return -1;
};

console.log(pivotIndex([-1, -1, -1, -1, -1, 0]))