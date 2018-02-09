# 697、Degree of an Array

## Question

### leetcode

[Degree of an Array](https://leetcode.com/problems/degree-of-an-array/description/)

### 中文描述：

给定一个非空非负整数数组 nums，求出数组的度，即出现次数最多的数的出现次数。

找到最小长度（连续的）的子数组，使其与 nums 的度相同。

* 例 1

  ```
  Input: [1, 2, 2, 3, 1]
  Output: 2
  Explanation:
  The input array has a degree of 2 because both elements 1 and 2 appear twice.
  Of the subarrays that have the same degree:
  [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
  The shortest length is 2. So return 2.
  ```

* 例 2

  ```
  Input: [1,2,2,3,1,4,2]
  Output: 6
  ```

* 注意

  数组的长度在 1 到 50000 之间。

  nums[i] 是 1 到 49999 之间的整数。

## Answer 1

### 思路

可以使用字典，然后遍历数组，将每个值作为 key 存入字典，val 设置一个数组，第一位是 出现的次数，第二位是开始位置，第三位是结束位置，同时找出数组的度，然后遍历字典，找到数组的度的那个数，然后结束位置减去开始位置加 1 就是最小子数组长度。

### 代码

[JS](./main_01.js)

## Answer 2

### 思路

还是使用字典，但是只需要保存计数和开始位置即可，遇到相同的数计数加 1 ，然后与度比较，若是计数大于度，则当前计数设为度，若等于度，就将当前计数与最小长度对比，去较小值。

### 代码

[JS](./main_02.js)
