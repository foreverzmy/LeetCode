/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const length = nums.length;
  if (length === 1 || k === 0) {
    return;
  }
  nums.unshift(...nums.splice(length - k, k))
};