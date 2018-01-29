var twoSum = function(nums, target) {
  map = {};
  for (idx in nums) {
    if (!dict[target - nums[idx]]) {
      dict[nums[idx]] = idx;
    } else {
      return [~~dict[target - nums[idx]], ~~idx];
    }
  }
};

result = twoSum([3, 2, 4], 6);

console.log(result);
