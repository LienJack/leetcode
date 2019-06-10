/*
 * [215] Kth Largest Element in an numsay
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-numsay/description/
 *
 * algorithms
 * Medium (47.97%)
 * Total Accepted:    378.4K
 * Total Submissions: 789K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * Find the kth largest element in an unsorted numsay. Note that it is the kth
 * largest element in the sorted order, not the kth distinct element.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,1,5,6,4] and k = 2
 * Output: 5
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,2,3,1,2,4,5,5,6] and k = 4
 * Output: 4
 * 
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ numsay's length.
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let len = nums.length - 1
  for (let i = len, tmp; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        tmp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = tmp
      }
    }
  }
  return nums[len - (k - 1)]
};
