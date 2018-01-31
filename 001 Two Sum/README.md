# Two Sum

## Question

### leetcode

[Two Sum](https://leetcode.com/problems/two-sum/description/)

### 中文描述

给定一个整数数组，找到两个数，使它们加起来可以成为一个特定的目标，返回两个数字的索引;

每个输入都只有一个解决方案，而且同一个元素不能使用两次。

### 例子

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## Answer

看到这个题目首先想到的就是穷举法，两个 for 循环遍历，但是这样的效率比较低，也没什么技巧，不符合期望，所以要用一种更好的方法来解。

### 思路

1. 先建立一个空字典对象;
2. 遍历数组，如果字典中 key 为 `target` 与数组当前位置值的差值，则直接返回当前位置和对应差值的 value，否则将当前数组位置的值存入字典，值为 key，位置为 value;

### 代码

[JS](./main.js)
