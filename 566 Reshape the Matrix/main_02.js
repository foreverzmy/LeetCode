/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  const m = nums.length;
  const n = nums[0].length;
  const matrix = [
    []
  ];
  if (m * n !== r * c) {
    return nums;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[matrix.length - 1].length !== c) {
        matrix[matrix.length - 1].push(nums[i][j])
      } else {
        matrix.push([nums[i][j]])
      }
    }
  }
  return matrix;
}