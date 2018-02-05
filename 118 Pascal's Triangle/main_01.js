/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var l = 0;
  var pascal = [];
  while (l < numRows) {
    row = [];
    row[0] = 1;
    row[l] = 1;
    if (l < 2) {
      l++;
      pascal.push(row);
    } else {
      half = Math.ceil(l / 2);
      for (var i = 1; i <= half; i++) {
        row[i] = pascal[l - 1][i - 1] + pascal[l - 1][i];
        row[l - i] = pascal[l - 1][i - 1] + pascal[l - 1][i];
      }
      l++;
      pascal.push(row);
    }
  }
  return pascal;
};
