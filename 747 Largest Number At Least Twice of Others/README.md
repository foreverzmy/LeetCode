# 747、Largest Number At Least Twice of Others

## Question

### leetcode

[Largest Number At Least Twice of Others](https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/)

### 中文描述：

给定的一个整数组数 nums 中，总有一个最大元素。

找到数组中的最大的元素是否至少是数组中其他元素的的两倍。

如果是，返回最大元素的索引否则，返回 -1。

* 例 1

  ```
  Input: nums = [3, 6, 1, 0]
  Output: 1
  Explanation: 6 is the largest integer, and for every other number in the array x,
  6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
  ```

* 例 2

  ```
  Input: nums = [1, 2, 3, 4]
  Output: -1
  Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
  ```

* 注意

  1. nums 的长度在 [1,50] 的范围内。
  2. 每个元素 nums[i] 都是在 [0,99] 之间的整数。

## Answer

### 思路

遍历一遍数组，找到最大的数字何其下标以及第二大的数字，如果最大的数字是第二大的数字的两倍多，则范围最大数字的下标，否则，返回 -1。

### 代码

[JS](./main_01.js)
