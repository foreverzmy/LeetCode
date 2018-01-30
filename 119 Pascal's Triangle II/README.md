# Pascal's Triangle II

## Question

### leetcode

[Pascal's Triangle II](https://leetcode.com/problems/pascals-triangle-ii/description/)

### 中文描述：

给定一个行数 numRows，生成杨辉三角的前 numRows 行。

### 例子

给定 numRows = 5

Return

```
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

## Answer

### 思路

每一层的第 i 个位置，第一位和最后一位为 1，其余的数等于上一层第 i-1 与第 i 个位置之和

### 代码

[JS](./main_01.js)
