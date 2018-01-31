# Rotate Array

## Question

### leetcode

[Rotate Array](https://leetcode.com/problems/rotate-array/description/)

### 中文描述：

用 k 步向右旋转 n 个元素组成的数组。

* 注意

试着用尽可能多的解决方案，至少用三种不同的方法来解决这个问题。

可以用 `O(1)` 的复杂度在原数组上解答。

### 例子

```
with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
```

## Answer 1

### 思路

这道题比较简单，就是把数组的后 k 项切下来放到数组前面，第一种可以直接用语言提供的 API 切割实现，复杂度为 `O(1)` 且不需要额外的空间。

### 代码

[JS](./main_01.js)

## Answer 2

### 思路

第二种方法可以通过循环来实现，将最后一位取出来放到第一位，循环 k 次。

### 代码

[JS](./main_01.js)
