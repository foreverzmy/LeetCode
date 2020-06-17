/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const size = s.length;
  if (size <= 1) return s;
  else if (size === 2) return s[0] === s[1] ? s : s[0];

  let start = 0;
  let end = 0;
  for (let middle = 0; middle < size - 1; middle += 1) {
    const odd = appendAroundMiddlePointer(s, middle, middle);
    const even = appendAroundMiddlePointer(s, middle, middle + 1);
    const len = Math.max(odd, even);
    if (len > end - start) {
      let halfSize = 0;
      if (len === odd) {
        // 奇数
        start = middle - (len - 1) / 2;
        end = middle + 1 + (len - 1) / 2;
      } else {
        start = middle - (len - 2) / 2;
        end = middle + 2 + (len - 2) / 2;
      }
    }
  }

  return s.slice(start, end);
};

/**
 * @description 从中点向两边开始扩散
 *
 * @param {string} s 字符串
 * @param {number} middlePointer0 中点1
 * @param {number} [middlePointer1=] 中点2
 * @return {number} 回文字符串的长度
 */
function appendAroundMiddlePointer(s, middlePointer0, middlePointer1) {
  const size = s.length;
  let leftIndex = middlePointer0;
  let rightIndex = middlePointer1;
  while (
    leftIndex >= 0 &&
    rightIndex <= size &&
    s.charAt(leftIndex) === s.charAt(rightIndex)
  ) {
    leftIndex -= 1;
    rightIndex += 1;
  }

  return rightIndex - leftIndex - 1;
}
