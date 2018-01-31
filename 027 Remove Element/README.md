# Remove Element

## Question

### leetcode

[Remove Element](https://leetcode.com/problems/remove-element/description/)

### 中文描述：

给定一个数组和一个值，删除该值的所有实例并返回新的长度。

不要为其它数组分配额外的空间，必须在 O(1) 额外的内存中修改原数组来实现。

元素的顺序可以改变，数组的长度变化也没关系。

### 例子

```
Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.
```

## Answer

### 思路

设定一个指针，初始为 0，如果指针为的值等于给定的值，删除指针位的值，指针位不便；如果指针位的值不等于给定的值，则指针加 1。

### 代码

[JS](./main_01.js)
