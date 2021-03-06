/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
  let min = arrays[0][0];
  let max = arrays[0][arrays[0].length - 1];
  let dis = 0;
  for (let i = 1; i < arrays.length; i++) {
    dis = Math.max(dis, Math.abs(arrays[i][0] - max));
    dis = Math.max(dis, Math.abs(arrays[i][arrays[i].length - 1] - min));
    max = Math.max(max, arrays[i][arrays[i].length - 1]);
    min = Math.min(min, arrays[i][0]);
  }
  return dis;
};
