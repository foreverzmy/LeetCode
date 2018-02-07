# 674、Longest Continuous Increasing Subsequence

## Question

### leetcode

[Longest Continuous Increasing Subsequence](https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/)

### 中文描述：

给定一个无序整数数组，找到最长的连续增长子序列（子数组）的长度。

* 例 1

  ```
  Input: [1,3,5,4,7]
  Output: 3
  Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3.
  Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4.
  ```

* 例 2

  ```
  Input: [2,2,2,2,2]
  Output: 1
  Explanation: The longest continuous increasing subsequence is [2], its length is 1.
  ```

* 注意

  数组的长度不会超过 10000。

## Answer

### 思路

这个是求最长的连续子数组，所以用一个计数器就可以了，如果遇到大的数字，计数器自增 1，并将最大的计数存起来；如果是一个小的数字，则计数器重置为 1。

### 代码

[JS](./main_01.js)

```

```
