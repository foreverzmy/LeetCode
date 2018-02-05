# Maximum Average Subarray I

## Question

### leetcode

[Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/description/)

### 中文描述：

给定一个由 n 个整数组成的数组，找到给定长度 k 的具有最大平均值的子数组，输出最大的平均值。

* 例

  ```
  Input: [1,12,-5,-6,50,3], k = 4
  Output: 12.75
  Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
  ```

* 注意

  1. 1 <= k <= n <= 30,000.
  2. 数组中元素的范围是 [-10000,10000].

## Answer

### 思路

有最大平均值的子数组的和也是最大的，所以可以先计算所有长度为 k 的子数组的和，找到最大的，然后 除以 k 即是最大平均值。

首先算出数组中前 k 个数的和，保存在 sum 和 max 中，然后遍历，每次减去前一个数，然后加上后一个数，得到的结果 sum 和 max 较大的取代 max。最后得到最大的子数组和，除以 k 即是最大平均值。

### 代码

[JS](./main_01.js)
