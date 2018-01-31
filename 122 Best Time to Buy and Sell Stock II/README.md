# Best Time to Buy and Sell Stock II

## Question

### leetcode

[Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/)

### 中文描述：

假设你有一个数组，其中第 i 个元素是第 i 天股票的价格。

设计一个算法找出最大利润。你可以根据需要完成尽可能多的交易（即多次买入和卖出一次股票），但是不可以同时进行多笔交易（必须在再次购买之前出售股票）。

### 例子

无

## Answer 1

### 思路

股票赚钱是低价买高价卖，那么只要后一天比前一天的价格高，那么就买入，第二天卖出。如果明天的价格更高，那么也可以今天买入，明天卖出。每次卖出的差值加入利润中就可以得到最大利润。

### 代码

[JS](./main_01.js)
