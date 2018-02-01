# Third Maximum Number

## Question

### leetcode

[Third Maximum Number](https://leetcode.com/problems/third-maximum-number/description/)

### 中文描述：

给定一个非空整数数组，返回数组中第三大的数，如果不存在，则返回最大的数。时间复杂度必须为 `O(n)`。

### 例子

```
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
```

```
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
```

```
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
```

## Answer

### 思路

这个题要去第三大的数，所以就要有三个变量，分别存最大、第二大、第三大的三个数。

初始时三个变量都为负无穷，然后遍历数组，若是比最大的数大，则依次降级并将数赋给最大项，依次类推。

### 代码

[JS](./main_01.js)
