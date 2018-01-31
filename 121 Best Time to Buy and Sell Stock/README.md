# Best Time to Buy and Sell Stock

## Question

### leetcode

[Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

### 中文描述：

假设你有一个数组，其中第 i 个元素是第 i 天股票的价格。

如果只能完成最多一笔交易（即买入和卖出一股股票），则设计一个算法找到最大的利润。

### 例子

```
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
```

```
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.
```

## Answer 1

### 思路

看到这个题目首先想到的就是直接遍历，然后每个数再与后面的数比较，将差值与之前的最大值比较，复杂度为 O(n²)。

### 代码

[JS](./main_01.js)

# Answer 2

### 思路

还是遍历一遍，
