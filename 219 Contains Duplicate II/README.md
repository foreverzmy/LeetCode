# Contains Duplicate II

## Question

### leetcode

[Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description/)

### 中文描述：

给定一个整数数组和整数 k，找出数组中是否有两个不同的索引 i 和 j，使得 nums[i]=nums[j]，并且 i 和 j 的绝对值差之多为 k。

### 例子

无

## Answer 1

### 思路

这个可以借助字典来实现。

遍历数组，将值作为 key，如果字典不存在此 key，将value 这是为 index，存入字典，如果存在 key，则把 value 与 index 的差和 k 比较，小于 k，返回 true，否则，将新的 index 复制给 value。如果最后没找到，返回 false。

### 代码

[JS](./main_01.js)
