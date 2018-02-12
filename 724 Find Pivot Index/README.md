# 724、Find Pivot Index

## Question

### leetcode

[Find Pivot Index](https://leetcode.com/problems/find-pivot-index/description/)

### 中文描述：

给定一个整数数组 nums，写一个方法返回这个数组的中枢点。

中枢点的定义是该点左边的数的和等于该点右边的数的和。

如果中枢点不存在，返回 -1，如果有多个中枢点，返回最左侧的中枢点。

* 例 1

  ```
  Input: 
  nums = [1, 7, 3, 6, 5, 6]
  Output: 3
  Explanation: 
  The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
  Also, 3 is the first index where this occurs.
  ```

* 例 2

  ```
  Input: 
  nums = [1, 2, 3]
  Output: -1
  Explanation: 
  There is no index that satisfies the conditions in the problem statement.
  ```

* 注意

  1. 数组的长度在 [1,10000]，的范围内，
  2. 数组的每个元素 `nums[i]` 是 [-1000,1000] 的整数。

## Answer

### 思路

先计算数组的和，然后遍历数组，计算左子数组的和与右子数组的和，相等则返回位置。

第一位也算，左边是空为 0，略坑。

### 代码

[JS](./main_01.js)