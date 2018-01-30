/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  while (m > 0 && n > 0) {
    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m -= 1;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n -= 1;
    }
  }
  if (n > 0) {
    nums1.splice(0, n, ...nums2.slice(0, n));
  }
};

nums1 = [4, 0, 0, 0, 0, 0];

merge(nums1, 1, [1, 2, 3, 5, 6], 5);
console.log(nums1);
