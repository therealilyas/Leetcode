/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  if (nums.lenght < 3) {
    return Math.max(...nums);
  }
  let first = Number.NEGATIVE_INFINITY;
  let second = Number.NEGATIVE_INFINITY;
  let third = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (curr > first) {
      third = second;
      second = first;
      first = curr;
    } else if (curr < first) {
      if (curr > second) {
        third = second;
        second = curr;
      } else if (curr < second) {
        if (curr > third) {
          third = curr;
        }
      }
    }
  }
  if (third === Number.NEGATIVE_INFINITY) {
    return first;
  }
  return third;
};
