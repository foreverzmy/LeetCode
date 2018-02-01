/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 */
var shortestDistance = function(words, word1, word2) {
  let p1 = 0;
  let p2 = words.length;
  let dis = words.length;
  words.forEach((v, i) => {
    if (val === word1) p1 = i;
    else if (val === word2) p2 = i;
    dis = Math.min(dis, Math.abs(p2 - p1));
  });
  return dis;
};
