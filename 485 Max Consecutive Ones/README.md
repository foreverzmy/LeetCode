# 485 Max Consecutive Ones

## Question

### leetcode

[Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/description/)

### 中文描述：

给定一个二进制数组，在数组中找到最大连续为1的个数。

* 注意

输入的数组只包含 0 和 1;

输入数组的长度是一个正整数，不会超过 10000;

### 例子

```
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
```

## Answer

### 思路

这道题让我们求最大连续 1 的个数，不是一道难题。我们可以遍历一遍数组，用一个计数器 count 来统计 1 的个数，方法是如果当前数字为 0，那么 count 重置为 0，如果不是 0，count 自增 1，然后每次更新结果 max 即可。

### 代码

[JS](./main_01.js)