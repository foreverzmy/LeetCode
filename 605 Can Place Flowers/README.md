# Can Place Flowers

## Question

### leetcode

[Can Place Flowers](https://leetcode.com/problems/can-place-flowers/description/)

### 中文描述：

假设你有一个长的花床，其中一些地块已经被种植，一些没有种植。然而，花不能种在临近的地块上，它们会因为争夺水而全部死亡。

给定一个花圃 flowersbed（表示为包含 0 和 1 的数组，0 表示空， 1 表示不为空）和一个数 n，如果 n 朵花可以在不违反无临近花规则下种植，返回 true。

* 例 1

  ```
  Input: flowerbed = [1,0,0,0,1], n = 1
  Output: True
  ```

* 例 2

  ```
  Input: flowerbed = [1,0,0,0,1], n = 2
  Output: False
  ```

* 注意

  1. 输入的数组不会违反无临近花规则;
  2. 输入数组的长度在 [1,20000] 的范围内;
  3. n 是一个不会超过数组大小的非负整数;

## Answer

### 思路

遍历数组，将符合无临近花规则的 0 都设置为 1，并计数，最后与 n 比较即可。

### 代码

[JS](./main_01.js)
