/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let res
  const map = new Map()
    nums.forEach((item, index) => {
      map.set(item, index)
    })
    nums.some((item, index)=> {
      let k = target - item
      if (map.has(k) && map.get(k) !== index) {
        res = [index, map.get(k)]
        return true
      }
    })
    return res
};

