/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  var row = [1];
  for (var i = 1; i <= rowIndex; i++) {
    var n = rowIndex;
    var m = i;
    var sub = 1;
    var sup = 1;
    console.log(n, m);
    while (m > 0) {
      sub *= n;
      sup *= m;
      n--;
      m--;
    }
    row.push(sub / sup);
  }
  return row;
};

console.log(getRow(5));
