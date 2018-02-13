/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;

  if (col === 1) {
    return true;
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isToeplitzMatrix(
  [
    [11, 74, 0, 93],
    [40, 11, 74, 7]
  ]
))