/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);
  var base = 0;
  for (i = 0; i < n; i++) {
    var left = base;
    var right = nums1.length;
    while (left <= right) {
      mid = ~~((left + right) / 2);
      if (nums2[i] < nums1[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    nums1.splice(left, 0, nums2[i]);
    base = left;
  }
};
