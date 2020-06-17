# Longest Palindromic Substring

> 收录在LeetCode字节跳动题库中

## Question

### leetcode

[Longest Palindromic Substring](https://leetcode-cn.com/problems/longest-palindromic-substring/)

### 中文描述：

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

### 例子

```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

## Answer

### 思路1

遍历每个字符，并以此为中点，向左右两边遍历

### 代码

[JS](./main_01.js)
