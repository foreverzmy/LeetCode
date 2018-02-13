# 766、Toeplitz Matrix

## Question

### leetcode

[Toeplitz Matrix](https://leetcode.com/problems/toeplitz-matrix/description/)

### 中文描述：

托普利茨矩阵是指从左上角到右下角的对角线上都是相同的元素。

现在给定一个 M*N 的矩阵，当且仅当矩阵是托普利茨矩阵时返回 true。

* 例 1

  ```
  Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
  Output: True
  Explanation:
  1234
  5123
  9512

  In the above grid, the diagonals are "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]", and in each diagonal all elements are the same, so the answer is True.
  ```

* 例 2

  ```
  Input: matrix = [[1,2],[2,2]]
  Output: False
  Explanation:
  The diagonal "[1, 2]" has different elements.
  ```

* 注意

  1. 矩阵是一个 2D 整数矩阵。
  2. 矩阵的行和列都在 [1,20] 的范围内。
  3. matrix[i][j] 是 [0,99] 范围内的整数。

## Answer

### 思路

这道题是比较简单的，直接从 1 进行遍历，然后与左上角的数比较，相等则继续比较下一个，不相等则停止比较返回 false 就可以了。

### 代码

[JS](./main_01.js)
