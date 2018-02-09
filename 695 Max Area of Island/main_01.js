/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const row = grid.length;
  const col = grid[0].length;
  let max = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        let set = new Set();
        set.add(`${i},${j}`);
        getAround(i, j, set);
        max = Math.max(max, set.size);
        set = null;
      }
    }
  }

  function getAround(i, j, set) {
    if (i - 1 >= 0 && grid[i - 1][j] === 1 && !set.has(`${i - 1},${j}`)) {
      set.add(`${i - 1},${j}`);
      getAround(i - 1, j, set);
    }
    if (j - 1 >= 0 && grid[i][j - 1] === 1 && !set.has(`${i},${j - 1}`)) {
      set.add(`${i},${j - 1}`);
      getAround(i, j - 1, set);
    }
    if (i + 1 < row && grid[i + 1][j] === 1 && !set.has(`${i + 1},${j}`)) {
      set.add(`${i + 1},${j}`);
      getAround(i + 1, j, set);
    }
    if (j + 1 < col && grid[i][j + 1] === 1 && !set.has(`${i},${j + 1}`)) {
      set.add(`${i},${j + 1}`);
      getAround(i, j + 1, set);
    }
  }
  return max;
};
