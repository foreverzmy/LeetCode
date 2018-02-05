/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  const row = M.length;
  const col = M[0].length;
  let result = [];

  for (let i = 0; i < row; i++) {
    result.push([]);
    for (let j = 0; j < col; j++) {
      let sum = 0;
      let count = 0;
      for (let x = -1; x < 2; x++) {
        for (let y = -1; y < 2; y++) {
          if (0 <= x + i && x + i < row && 0 <= y + j && y + j < col) {
            sum += M[x + i][y + j];
            count++;
          }
        }
      }
      result[i].push(~~(sum / count));
    }
  }
  return result;
};

console.log(imageSmoother([[1, 1, 1], [1, 1, 1], [1, 1, 1]]));
