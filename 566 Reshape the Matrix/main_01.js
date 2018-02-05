/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  const m = nums.length;
  const n = nums[0].length;
  const matrix = [];
  if (m * n !== r * c) {
    return nums;
  }

  for (let i = 0; i < r; i++) {
    matrix[i] = [];
    for (let j = 0; j < c; j++) {
      const k = i * c + j;
      matrix[i][j] = nums[~~(k / n)][k % n];
    }
  }
  return matrix;
};
