/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // babad
  // tag : dp
  if (!s || s.length === 0) return "";
  let res = s[0];

  const dp = [];

  // 倒着遍历简化操作， 这么做的原因是dp[i][..]依赖于dp[i + 1][..]
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j = i; j < s.length; j++) {
      if (j - i === 0) dp[i][j] = true;
      // specail case 1
      else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true;
      // specail case 2
      else if (s[i] === s[j] && dp[i + 1][j - 1]) {
        // state transition
        dp[i][j] = true;
      }

      if (dp[i][j] && j - i + 1 > res.length) {
        // update res
        res = s.slice(i, j + 1);
      }
    }
  }

  return res;
};

let test = "babad";
console.time("test " + test);
let res = longestPalindrome(test);
console.timeEnd("test " + test);
console.log(`[res]${test}:`, res);
console.log(["bab", "aba"].includes(res));

test = "cbbd";
console.time("test " + test);
res = longestPalindrome(test);
console.timeEnd("test " + test);
console.log(`[res]${test}:`, res);
console.log(["bb"].includes(res));

test = "avcdd%%ddedcdedd%%ddfsersssdfw3df";
console.time("test " + test);
res = longestPalindrome(test);
console.timeEnd("test " + test);
console.log(`[res]${test}:`, res);
console.log(["dd%%ddedcdedd%%dd"].includes(res));
