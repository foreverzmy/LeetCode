# Remove Duplicates from Sorted Array

## Question

### leetcode

[Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

### 中文描述：

给定一个有序数组，在原数组上删除重复内容，使每个元素只出现一次并返回新的数组长度。

不要为其它数组分配额外的空间，您必须通过在 O(1) 的内存中修改输入数组来实现。

### 例子

```
Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.
```

## Answer

### 思路 1

这道题要求从有序数组中去除重复项，所以只需要看数组中后一个数与当前数相不相同就可以了。可以定义一个指针，当当前数与后一个数不同时，指针加 1，相同时，将下一位去掉，此时指针不加 1，继续与下一位比较。

### 代码

[JS](./main_01.js)
