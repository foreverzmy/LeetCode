/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  length = digits.length;
  digits[length - 1] += 1;
  for (var i = length - 1; i >= 0; i--) {
    if (digits[i] === 10) {
      digits[i] = 0;
      if (i > 0) {
        digits[i - 1] += 1;
      } else {
        digits.unshift(1);
      }
    } else {
      return digits;
    }
  }
  return digits;
};

plusOne([9])