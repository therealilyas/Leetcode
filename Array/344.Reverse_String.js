/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  let tmp = [];
  while (left < right) {
    tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;
    left += 1;
    right -= 1;
  }
};
