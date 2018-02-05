# Maximum Distance in Arrays

## Question

### leetcode

[Maximum Distance in Arrays](https://leetcode.com/problems/maximum-distance-in-arrays/)

### 中文描述：

给定 m 个数组，每个数组按照升序排序。从两个不同的数组中挑出两个整数（每个数组中选择一个）并计算距离。将两个整数 a 和 b 之间的距离定义为他们的绝对值 |a-b|，找到距离的最大值。

* 例 1

```
Input:
[[1,2,3],
 [4,5],
 [1,2,3]]
Output: 4
Explanation:
One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.
```

* 注意

  1. 每个给定的数组至少有一个数字，至少有两个非空数组。
  2. 所有的 m 个数组中整数总数在 [2,10000] 的范围内。
  3. m 个数组中的整数都在 [-10000,10000] 的范围内。

## Answer

### 思路

遍历数组，用两个遍历 max 和 min 分别表示遍历过的数组中的最大值和最小值。因为数组都是有序的，所以只需要从每个数组的第一位取值比较得出最小值，从最后一位取值比较得出最大值即可。当遍历到新数组时，计算新数组尾元素和 max 绝对差，跟 min 和新数组首元素的绝对差，取二者之间的较大值更新距离。

### 代码

[JS](./main_01.js)
