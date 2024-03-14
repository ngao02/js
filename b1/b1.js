const prompt = require("prompt-sync")();
const twoSum = function (nums, target) {
  for (i = 0; i <= nums.length - 1; i++) {
    for (j = 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
const numsString = prompt("nums:");
const nums = numsString.split(",").map(Number);
const target = parseInt(prompt("target:"));
const result = twoSum(nums, target);
console.log("result:", result);
