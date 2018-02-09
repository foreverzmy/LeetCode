/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const row = grid.length;
  const col = grid[0].length;
  let max = 0;
  let count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      DFS(i, j);
      max = Math.max(max, count);
      count = 0;
    }
  }

  function DFS(i, j) {
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === 0) {
      return;
    }
    count++;
    grid[i][j] = 0;
    DFS(i - 1, j);
    DFS(i + 1, j);
    DFS(i, j - 1);
    DFS(i, j + 1);
  }

  return max;
};

let result = maxAreaOfIsland([
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1]
]);

console.log(result);
