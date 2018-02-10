# 717、1-bit and 2-bit Characters

## Question

### leetcode

[1-bit and 2-bit Characters](https://leetcode.com/problems/1-bit-and-2-bit-characters/description/)

### 中文描述：

有两个特殊字符，第一个字符用一个比特 0 表示，第二个字符用两个比特（10 或 11）表示。

给定一个用几个比特表示的字符串，返回最后一个字符串是否必须为一个比特。给定的字符串始终以 0 结尾。

* 例 1

  ```
  Input:
  bits = [1, 0, 0]
  Output: True
  Explanation:
  The only way to decode it is two-bit character and one-bit character. So the last character is one-bit character.
  ```

* 例 1

  ```
  Input:
  bits = [1, 1, 1, 0]
  Output: False
  Explanation:
  The only way to decode it is two-bit character and two-bit character. So the last character is NOT one-bit character.
  ```

* 注意

## Answer

### 思路

设定一个指针指向头部，从头开始判断，如果是 1，指针就跳过两位，如果是 0，就跳过一位。当指针的值不小于 length-1 的时候停止操作，看指针的位置，若是在 length-1 处，返回 true，若是在 length 处，返回 false。

### 代码

[JS](./main_01.js)

