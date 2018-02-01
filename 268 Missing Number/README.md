# Missing Number

## Question

### leetcode

[Missing Number](https://leetcode.com/problems/missing-number/description/)

### 中文描述：

给定一个从 `0,1,2,...,n` 中取出 n 个数组成的无序数组，找出数组中缺少的那个数。

### 例子

```
Input: [3,0,1]
Output: 2
```

```
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
```

## Answer

### 思路

这个算是一个简单的数学问题，可以先计算 n 个数的和，然后再计算数组的和，最后相减就是缺少的数。

### 代码

[JS](./main_01.js)
