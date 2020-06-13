# Reverse Linked List

> 收录在LeetCode字节跳动题库中

## Question

### leetcode

[Reverse Linked List](https://leetcode-cn.com/problems/reverse-linked-list/)

### 中文描述：

反转一个单链表。

### 例子

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

### 进阶要求

你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

## Answer

### 思路 1

  在每次循环中，如果当前节点不为Null，则每次循环中都需要根据当前值创建一个节点，
  问题在于，每次创建的节点都应该是上一个节点的下一个节点，也就是：

  ```
    a1.next = null
    a2.next = a1
    a3.next = a2
    ...
  ```

### 代码

[JS](./main_01.js)
