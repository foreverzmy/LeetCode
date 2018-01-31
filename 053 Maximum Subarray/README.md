# Maximum Subarray

## Question

### leetcode

[Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)

### 中文描述：

在一个数组中找到连续的子数组（至少包含一个数字），使子数组的总和最大。

### 例子

```
given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
```

## Answer

### 思路

遍历数组，对于每一个数字，如果之前的数字之和加这个数字与这个数字比大小，如果这个数字自己就比之前的数字之和加这个数字大的话，那么说明不需要再继续加了，直接从这个数字，开始继续，因为它自己已经比之前的sum都大了；

反过来，如果之前的数字之和加这个数字大于这个数字，就继续加下，并将结果与前面所有和的最大值比较，将大的保存到最大值里。

### 代码

[JS](./main_01.js)
