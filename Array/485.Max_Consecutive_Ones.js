/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      current = 0;
    } else {
      current++;
    }
    max = Math.max(current, max);
  }
  return max;
};
