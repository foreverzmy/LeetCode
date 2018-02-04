# K-diff Pairs in an Array

## Question

### leetcode

[K-diff Pairs in an Array](https://leetcode.com/problems/k-diff-pairs-in-an-array/description/)

### 中文描述：

给定一个整数数组和整数 k，你需要找到数组中差为 k 的不重复数对。

* 注意

数对(i, j) 和 (j, i)算作同一个数对;

数组长度不超过10,000;

所有整数在范围 [-1e7, 1e7] 之间

### 例子

```
Input: [3, 1, 4, 1, 5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
```

```
Input:[1, 2, 3, 4, 5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
```

```
Input: [1, 3, 1, 5, 4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).
```

## Answer 1

### 思路

这道题给了我们一个含有重复数字的无序数组，还有一个整数 k，让我们找出有多少对不重复的数对 (i, j) 使得 i 和 j 的差刚好为 k。由于 k 有可能为 0，而只有含有至少两个相同的数字才能形成数对，那么就是说我们需要统计数组中每个数字的个数。我们可以建立每个数字和其出现次数之间的映射，然后遍历哈希表中的数字，如果 k 为 0 且该数字出现的次数大于 1，则 count 加 1；如果 k 不为 0，且用当前数字加上 k 后得到的新数字也在数组中存在，count 加 1。

### 代码

[JS](./main_01.js)
