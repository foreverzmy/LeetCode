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

找到中点，然后向左右两边遍历；如果在遍历过程中，发现字串不是回文，则以不是回文的字串为新的指针点继续向两端遍历；
最差的情况，就是每个字串都是一个字母本身，那么所有的遍历次数就是log(n)。

Eg: `abcdefg` -> (c <- d -> e) -> (b <- c -(x)-> .. <-(x)- f -> g) ...

**需要注意的是，已经遍历过的节点就不要遍历了**

### 代码

[JS](./main_01.js)
