/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let squares = [];
  for (let i = 0; i < nums.length; i++) {
    squares.push(nums[i] ** 2);
  }
  squares = squares.sort(function (a, b) {
    return a - b;
  });
  return squares;
};
