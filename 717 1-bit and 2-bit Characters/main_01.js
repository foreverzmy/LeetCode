/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let count = 0;
  let length = bits.length;
  while (count < length - 1) {
    if (bits[count] === 1) {
      count += 2;
    } else {
      count++;
    }
  }
  if (count < length) {
    return true;
  }
  return false;
};

rs = isOneBitCharacter([0, 1, 1, 0, 1, 0])

console.log(rs)