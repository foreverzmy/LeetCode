# Move Zeroes

## Question

### leetcode

[Move Zeroes](https://leetcode.com/problems/move-zeroes/description/)

### 中文描述：

给定一个数组 nums，编写一个函数将所有的 0 移动到末尾，同时保持非零元素的相对顺序。

* 注意

必须在不拷贝数组副本的情况下在原数组完成。

尽量减少操作总数。

### 例子

```
given nums = [0, 1, 0, 3, 12] 
after calling your function, nums should be [1, 3, 12, 0, 0]
```

## Answer

### 思路

这道题很简单，遍历一遍，可以将为 0 的项放到最后面，然后从此项继续遍历。也可以将第一个 0 位记录下来，然后将非零位插入到前面。

### 代码

[JS](./main_01.js)
