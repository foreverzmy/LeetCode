/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const length = nums.length;
  if (length < 2) {
    return length === 0 ? 0 : nums[0];;
  }
  let last = nums[0];
  let total = Math.max(nums[0], nums[1]);

  for (let i = 2; i < length; i++) {
    const tmp = total;
    total = Math.max(last + nums[i], total);
    last = tmp;
  }
  return total;
};