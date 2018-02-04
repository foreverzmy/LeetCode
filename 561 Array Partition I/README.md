# Array Partition I

## Question

### leetcode

[Array Partition I](https://leetcode.com/problems/array-partition-i/description/)

### 中文描述：

给定一个 2n 个整数的数组，你的任务是把这些整数分成 n 对整数，比如 (a1, b1), (a2, b2), ..., (an, bn)，使 min(ai, bi) 的所有 i 从 1 到 n 的和尽可能的大。

* 注意

1. n 是一个正整数，在 [1,10000] 的范围内;
2. 所有数组内的整数在 [-10000，10000] 内;

### 例子

```
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
```

## Answer

### 思路

让每对中最小的值得和最大。应该是没对的值越接近越好，因为如果差太大，没组只取较小的数字，较大的数字就浪费掉了。所以只要先对数组进行排序，然后去数组的偶数位置相加即可。

排序有很多种算法，计数排序和归并排序是较快的。这里用了内置的排序算法。

### 代码

[JS](./main_01.js)
