/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  const size = sortedNums.length;
  if (sortedNums[0] > 0 && sortedNums[0] * sortedNums[size - 1] > 0) return [];

  const res = [];
  for (let i = 0; i < size - 2; ) {
    const sum = -sortedNums[i];

    let leftIndex = i + 1;
    let rightIndex = size - 1;
    while (leftIndex < rightIndex) {
      const leftNum = sortedNums[leftIndex];
      const rightNum = sortedNums[rightIndex];
      const leaveNum = sum - leftNum - rightNum;
      if (leaveNum === 0) {
        res.push([leftNum, sortedNums[i], rightNum]);
      }
      if (leaveNum >= 0) {
        // 跳过重复的数字
        while (leftIndex < rightIndex && leftNum === sortedNums[++leftIndex]) {}
      } else {
        while (
          leftIndex < rightIndex &&
          rightNum === sortedNums[--rightIndex]
        ) {}
      }
    }
    while (sum === -sortedNums[++i]) {}
  }
  return res;
};

let test = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(test));
test = [0, 0, 0];
console.log(threeSum(test));
test = [0, 0, 0, 0];
console.log(threeSum(test));
test = [-2, 0, 1, 1, 2];
console.log(threeSum(test));
