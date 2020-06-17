# Merge Two Sorted Lists

> 收录在LeetCode字节跳动题库中

## Question

### leetcode

[Merge Two Sorted Lists](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

### 中文描述：

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

### 例子

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

## Answer

### 思路1

额，就是将两个排好序的链表重新排序。需要注意的是，链表可能一长一短，当短的结束的时候就返回最终结果；所以需要用到递归；需要考虑下面三种情况：

1. 如果`l1`或者`l2`中有任意一个为`null`就返回其中不是`null`的那个（升序排列所以后续的节点顺序一定是对的）;
2. 如果`l1`的值不大于`l2`，此时，`l1`被**消费**掉了，那么就取其下一个节点`l1.next`，然后回到1；
3. 如果`l2`的值大于`l1`，同理。

如下，约定`->`指向的时当前递归的返回

```
ORIGIN:
1   3
2   3
RECURSION1:
->  1     3
      next
          2   3
RECURSION2:
          3
      next
->  2     3
RECURSION3:
->  3     NULL
      next
          3
RECURSION4:
    NULL
      next NULL
->  3
RESULT:
    1 -> 2 -> 3 -> 3
```

可以看到，因为每次只前进**消费**掉的那个链表，所以一趟下来，最终两条链表上的节点都会按照顺序被走一遍。

### 代码

[JS](./main_01.js)
