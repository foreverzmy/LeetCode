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

  // Cursor for nums2 array
  var j = 0;

  for (var i = 0; i < m; i++) {
    for (; j < n; j++) {
      if (nums2[j] < nums1[i]) {
        nums1.splice(i, 1, nums2[j], nums1[i]);
        i++;
        m++;
      } else {
        break;
      }
    }

    // Stop if there's no more elements in nums2 array
    if (j === n) {
      return;
    }
  }

  // Push rest nums2 elements to nums1 array
  for (; j < n; j++) {
    nums1.push(nums2[j]);
  }
};
