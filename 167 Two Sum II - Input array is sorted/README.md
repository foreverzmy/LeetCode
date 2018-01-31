# Two Sum II - Input array is sorted

## Question

### leetcode

[167. Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/)

### 中文描述：

给定一个按升序排序的数组，找到两个数使两数之和为目标数。

函数 twoSum 应该返回使它们合成目标数的两数的索引，其中 index1 必须小于 index2。请注意，你返回的答案（index1 和 index2）不是从 0 开始的。

确保每个输入只有一个解决方案，而且不能多次使用同一个元素。

### 例子

```
Input: numbers={2, 7, 11, 15}, target=9

Output: index1=1, index2=2
```

## Answer

### 思路

因为是升序数组，所以用两个指针，一个指向开头，一个指向末尾，然后向中间遍历，如果两数之和等于 target，直接返回两数，如果两数之和大于 target，那么尾指针向前移一位，相反，头指针向后移一位，复杂度为 `O(n)`

### 代码

[JS](./main_01.js)
