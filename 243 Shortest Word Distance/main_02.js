/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 */
var shortestDistance = function(words, word1, word2) {
  let dict = {};
  let distance = Infinity;
  for (let i in words) {
    const tmp = words[i];
    if (tmp === word1) {
      dict[word1] = i;
    } else if (tmp === word2) {
      dict[word2] = i;
    }
    if (dict[word1] && dict[word2]) {
      distance = Math.min(Math.abs(dict[word1] - dict[word2]), distance);
    }
  }
  return distance;
};
