# Plus One

## Question

### leetcode

[Plus One](https://leetcode.com/problems/plus-one/description/)

### 中文描述：

给定一个非空数字数组表示非负整数，对整数加 1。

整数不包含任何前导 0，除了 0 本身。

数字最高位存在列表的头部。

### 例子

```
[1,5] => [1,6]
[2,9] => [3,0]
[9,9] => [1,0,0]
```

## Answer

### 思路

先将最后一位加一，然后从后遍历数组，如果是 10，就将其重置为 0，将前一位加 1，如果不是 10，直接返回数组即可。

### 代码

[JS]()