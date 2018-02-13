# 70、Climbing Stairs

## Question

### leetcode

[Climbing Stairs](https://leetcode.com/problems/climbing-stairs/description/)

### 中文描述：

你在爬楼梯，需要 n 步才能到达顶端。

你每次可以爬 1 步或 2 步，有多少种不同的方式可以到顶端？

* 注意

  给定的 n 是正整数。

* 例 1

  ```
  Input: 2
  Output:  2
  Explanation:  There are two ways to climb to the top.

  1. 1 step + 1 step
  2. 2 steps
  ```

* 例 2

  ```
  Input: 3
  Output:  3
  Explanation:  There are three ways to climb to the top.

  1. 1 step + 1 step + 1 step
  2. 1 step + 2 steps
  3. 2 steps + 1 step
  ```

## Answer 1

### 思路

最简单的思路是转成递归来求解，每一步都是上一步加 1 或者上上步加 2，得到的，所以递归可解。

### 代码

[JS](./main_01.js)

## Answer 2

### 思路

这个将递归转化了，每一步存到了一个数组中，每一步都是上一步加 1 或者上上步加 2 得到的，所以可能性就是上一步与上上步的可能性之和。

### 代码

[JS](./main_02.js)

## Answer 3

### 思路

第二部的基础上空间优化，不需要存每一步的可能性，只需要存最后三部的即可。

### 代码

[JS](./main_03.js)