/*
 * @lc app=leetcode id=164 lang=javascript
 *
 * [164] Maximum Gap
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  let max = 0
  let t
  if( nums.length < 2) return 0
  for (let i = nums.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j]>nums[i]) {
        let temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp
      }
    }
    if (nums[i+1]) {
      t = nums[i+1] - nums[i]
      if(t > max) max = t
    }
  }
  return t
};

