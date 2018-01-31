# Pascal's Triangle II

## Question

### leetcode

[Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/description/)

### 中文描述：

给定一个索引 k，返回杨辉三角的第 k 行。

### 例子

给定 k = 3,

Return `[1,3,3,1]`

* 提示

你可以优化你的算法只用 O(k) 的复杂度吗？

## Answer

### 思路

杨辉三角的每一行第一位是 1，后面的每一位都可以通过组合数公式 `C(n,m)=p(n,m)/m!` 来计算得到。

### 代码

[JS](./main_01.js)
