# Non-decreasing Array

## Question

### leetcode

[Non-decreasing Array](https://leetcode.com/problems/non-decreasing-array/description/)

### 中文描述：

给定有 n 个整数的数组，检查它是否可以通过修改至多一个元素来使其变为非递减数列。

我们定义如果 array[i]<=array[i+1] 成立，则这个数组是非递减的。

* 例 1

  ```
  Input: [4,2,3]
  Output: True
  Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
  ```

* 例 2

  ```
  Input: [4,2,1]
  Output: False
  Explanation: You can't get a non-decreasing array by modify at most one element.
  ```

* 注意

  n 的范围是 [1,10000]

## Answer

### 思路

后面的数小于前面的数时会产生冲突，这时候就需要修改其中的某个数，可能是前面的数太大，也可能是后面的数太小，所以需要具体分析与再前面的数的关系来决定修改哪个数。然后通过 count 来计数，当 count 大于 1 时，为 false，否则，为 true。

### 代码

[JS](./main_01.js)
