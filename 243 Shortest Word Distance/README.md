# Shortest Word Distance

## Question

### leetcode

[Shortest Word Distance](https://leetcode.com/problems/shortest-word-distance/description/)

### 中文描述：

给定一个单词数组和两个单词 word1、word2，返回两个单词的最小距离。

### 例子

```
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Given word1 = “coding”, word2 = “practice”, return 3.
Given word1 = "makes", word2 = "coding", return 1.
```

## Answer 1

### 思路

初始化距离 d 为数组长度，然后用两个指针，一个指向前一个匹配到的 word1 或者 word2 的位置，一个指向当前位置，若当前位置与前一个相同，则将匹配指针指到当前位置。若不同，且当前位置为另一值，则用当前指针与前一指针的差与距离 d 比较，弱小，则取代，循环结束完成，复杂度为 O(n)。

### 代码

[JS](main_01.js)

## Answer 2

### 思路

初始化距离 d 为数组长度，然后用字典存 word1 和 word2 作为 key，位置作为 value，遍历 words，如果遇到 word1 或者 word2，就去更新字典，并把 字典里的两个值做差，取绝对在与 d 比较，较小的取代 d。

循环一遍即可完成，复杂度为 `O(n)`，但需要额外的空间。

### 代码

[JS](main_02.js)

## Answer 3

### 思路

将前两种方式结合起来，初始距离 d 为数组长度，两个指针分别指向开头和结尾，如果遍历到 word1，则指针 p1 指向 word1，如果遍历到 word2，则 p2 指向 word2，然后每次都比较 p1 和 p2 的差的大小，取较小值。

### 代码

[JS](main_03.js)
