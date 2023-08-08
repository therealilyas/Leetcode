/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
  const numObject = {};

  for (let i = 0; i < arr.length; i++) {
    let thisNum = arr[i];

    numObject[thisNum] = i;
  }

  for (var i = 0; i < arr.length; i++) {
    let diff = target - arr[i];

    if (numObject[diff] && numObject[diff] !== i) {
      return [i, numObject[diff]];
    }
  }
};
