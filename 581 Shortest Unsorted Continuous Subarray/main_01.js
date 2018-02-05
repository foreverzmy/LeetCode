/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  const qucikSort = function(arr) {
    let length = arr.length;
    if (length <= 1) return arr;
    let pivot = arr.splice(~~(length / 2), 1)[0];
    let left = [];
    let right = [];

    for (let i = 0; i < length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return qucikSort(left).concat([pivot], qucikSort(right));
  };

  const sortNums = qucikSort([...nums]);
  let start = null;
  let end = null;
  for (let i = 0; i < nums.length; i++) {
    if (start === null && sortNums[i] !== nums[i]) {
      start = i;
    }
    if (
      end === null &&
      sortNums[nums.length - 1 - i] !== nums[nums.length - 1 - i]
    ) {
      end = nums.length - 1 - i;
    }
  }
  if (start === null && end === null) {
    return 0;
  }
  return end - start + 1;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
