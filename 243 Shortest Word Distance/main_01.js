/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 */
var shortestDistance = function(words, word1, word2) {
  let tmp = '';
  let distance = words.length;
  let preIdx = 0;
  for (let i in words) {
    if (words[i] === word1 || words[i] === word2) {
      if (words[i] !== tmp && tmp !== '') {
        distance = Math.min(i - preIdx, distance);
      }
      preIdx = i;
      tmp = words[i];
    }
  }
  return distance;
};
