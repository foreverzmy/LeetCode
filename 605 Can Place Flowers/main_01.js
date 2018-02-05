/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  const length = flowerbed.length;
  if (length === 1) {
    if (flowerbed[0] === 0) return true;
  }

  let count = 0;
  flowerbed.unshift(0);
  flowerbed.push(0);
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] + flowerbed[i - 1] + flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      count++;
    }
  }
  if (count >= n) {
    return true;
  }
  return false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));
