/**
 * @description 查找最长子串的长度
 *
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const uniqueChar = new Set();
  const size = s.length;

  let rightIndex = 0; // 设置右边指针的初始值，在整个过程中，字符串只遍历一遍
  let ans = 0;
  for (let leftIndex = 0; leftIndex < size; leftIndex += 1) {
    // 提前返回
    if (leftIndex + ans > size) return ans;
    if (leftIndex !== 0) {
      uniqueChar.delete(s.charAt(leftIndex - 1)); // 如果左指针向后移动，就将之前开头的字符串删除
      /**
       * Eg: abadeeff
       * 0:
       * (ab)adeeff
       * 1:
       * 🚨这里应该将“a”从Set中删除
       * a(bade)eff
       */
    }

    while (
      rightIndex < size &&
      !uniqueChar.has(s.charAt(rightIndex))
    ) {
      uniqueChar.add(s.charAt(rightIndex));
      rightIndex += 1;
    }

    ans = Math.max(ans, rightIndex - leftIndex);
  }

  return ans;
}

const test = ['abadeeff', 'abcabcbb', 'pwwkew'];
console.log(test.map(lengthOfLongestSubstring).join('\n'));
