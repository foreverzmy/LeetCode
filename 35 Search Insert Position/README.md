# Search Insert Position

## Question

### leetcode

[Search Insert Position](https://leetcode.com/problems/search-insert-position/description/)

### 中文描述：

给定一个有序数组和一个目标值，如果在数组中找到目标值，返回索引；如果没找到，返回按顺序插入时的索引。

认为数组中没有重复值。

### 例子

```
Input: [1,3,5,6], 5
Output: 2
```

```
Input: [1,3,5,6], 2
Output: 1
```

```
Input: [1,3,5,6], 7
Output: 4
```

```
Input: [1,3,5,6], 0
Output: 0
```

## Answer

### 思路

看到题就是有序数组查找就想到了二分查找。思路就是每次取中间，如果等于目标即返回，否则根据大小关系切去一半。因此算法复杂度是 `O(logn)`，空间复杂度 `O(1)`。

### 代码

[JS]()
