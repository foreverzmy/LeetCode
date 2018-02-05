# Shortest Unsorted Continuous Subarray

## Question

### leetcode

[Shortest Unsorted Continuous Subarray](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/description/)

### 中文描述：

给定一个整数数组，找到一个连续的子数组，使只对这个子数组进行升序排序，就可以使整个数组成为升序排序。

你应该找到最短的子数组并输出它的长度。

* 注意

1. 数组的长度在 [1,10000] 的范围内;
2. 输入的数组可能包含重复项，因此这里的升序表示 `<=`;

### 例子

```
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
```

## Answer 1

### 思路

可以直接将数组拷贝然后对其进行排序，然后用排序后的数组与之前的数组进行对比，找到第一个和最后一个不一致的位置，相减 +1 得到结果。要对顺序数组做另外的处理。

我用了快速排序对数组进行排序，速度还可以，但是利用了多余的空间，leetcode 报错：Memory Limit Exceeded，只能用下面的方法了。

### 代码

[JS](./main_01.js)

## Answer 2

### 思路

### 代码

[JS](./main_02.js)
