# Reshape the Matrix

## Question

### leetcode

[Reshape the Matrix](https://leetcode.com/problems/reshape-the-matrix/description/)

### 中文描述：

在 MATLAB 中，有一个非常有用的函数叫 `reshape`，可以将一个矩阵重新塑造成一个不同大小的新矩阵，并保留其原始数据。

给定一个由二维数组组成的矩阵，和两个正整数 r 和 c，分别代表所需的整形矩阵的行号和列号。

重构后的矩阵需要以原始矩阵的所有元素按照相同的行数顺序填充。

在 `reshape` 操作中，如果给定的参数是合法的，则输出新的重塑矩阵；否则，输出原始矩阵。 

### 例子

```
Input: 
nums = 
[[1,2],
 [3,4]]
r = 1, c = 4
Output: 
[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
```

```
Input: 
nums = 
[[1,2],
 [3,4]]
r = 2, c = 4
Output: 
[[1,2],
 [3,4]]
Explanation:
There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
```

## Answer 1

### 思路

二维数组大小重新非配的问题的关键就是对应位置的坐标转换，这道题我们先判断给定数组是否能重塑成给定的大小，就是看两者的元素总数是否相同，直接行数乘以列数即可，然后我们新建一个目标大小的数组，并开始遍历，对于每个位置，算出在原数组中的对应位置赋值过来即可。

### 代码

[JS](./main_01.js)

## Answer 2

### 思路

还是先判断给定数组是否能重塑成给定的大小，然后开始遍历，每次判断数组的最后一行的长度是否是 c，如果是，则新加一行，如果不是，则往最后一行加入当前数据。

### 代码

[JS](./main_02.js)