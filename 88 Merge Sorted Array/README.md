# Merge Sorted Array

## Question

### leetcode

[Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/description/)

### 中文描述：

给定两个有序整数数组 `nums1` 和 `nums2`，将 nums2 合并到 nums1 并排序。

* 注意

可以假设 nums1 有足够的空间（大于或等于 m+n）来保存 nums2 中的其它元素，nums1 和 nums2 初始化的元素分别是 m 和 n。

### 例子

## Answer 1

### 思路

看到这个题目首先想到的是以 nums1 位基础数组，遍历 nums2，然后对每一个数用二分法插入到 nums1 中，插入的位置可以作为下一个二分的左边界。

### 代码

[JS](./main_01.js)

## Answer 2

### 思路

方案 1 虽然用了二分法，复杂度控制在了 O(nlogm)，但是效率和大神们一比却很低，后来发现社区流行尾插法。

尾插法就是从后往前遍历比较两个数组，将较大的放入两数组合并长度的最后面，然后继续比较，较大的放入第二位这样。

### 代码

[JS](./main_02.js)

## Answer 2

### 思路

方案 2 也不错，但是较排首位的答案性能还有些差距，观摩了一下排首位的答案，返现竟然是最简单的两数组遍历，但是做了一些变化，使复杂度大幅降低，大神就是大神啊。

### 代码

[JS](./main_03.js)
