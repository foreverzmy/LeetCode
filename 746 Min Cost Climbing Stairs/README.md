# 746、Min Cost Climbing Stairs

## Question

### leetcode

[Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/description/)

### 中文描述：

有一个楼梯，第 i 步有一个非负的花费 cost[i] 分配（包括 0）。

一但你支付了成本，你可以走一到两步，找到到达楼层顶部的最低成本，可以从第 0 步或者第 1 步开始。

* 例 1

  ```
  Input: cost = [10, 15, 20]
  Output: 15
  Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
  ```

* 例 2

  ```
  Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
  Output: 6
  Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
  ```

* 注意

  1. cost 的 长度在 [2,1000] 的范围内。
  2. 每个 cost[i] 都是 [0,999] 的整数。

## Answer

### 思路

如果我们用一个数组 dp[] 来存放到达每一层所需要的花费值。则则最终结果是求 dp[cost.length] 的值。因为每次可以走 1 层或者 2 层，并且可以从 0 或者从 1 开始，所以可以得到 dp[0] 为 0，dp[1] 为 0。从 2 开始，dp[i] 可以由通过 dp[i-2] 走 2 层或者通过 dp[i-1] 走一层到达，而这 i-2 和 i-1 层所要花费的值分别为 cost[i-2] 和 cost[i-1]，所以，dp[i] = min(dp[i-2] + cost[i-2], dp[i-1] + cost[i-1])。该算法的空间复杂度为 O(n)，时间复杂度为 O(n)。

### 代码

[JS](./main_01.js)