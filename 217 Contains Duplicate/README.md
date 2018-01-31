# Contains Duplicate

## Question

### leetcode

[Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)

### 中文描述：

给定一个整数数组，查找数组中是否有重复项。如果任何值在数组中出现两次，返回 true，否则，返回 false。

### 例子

无

## Answer 1

### 思路

这个题目很简单，可以借助 Set 类型，将数组转化为 Set，然后比较 Set 和数组的大小，如果不一样大，则说明有重复地数。

### 代码

[JS](./main_01.js)

## Answer 2

### 思路

除了上面的直接将数组转化为 Set 类型，还可以转化为 Set 或者字典类型，然后每次判断字典中有没有这个数，如果有，这说明有相同项，否则，将此项插入字典。

### 代码

[JS](./main_02.js)