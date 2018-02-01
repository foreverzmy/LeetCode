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

## Answer

### 思路

### 代码

[JS]()
