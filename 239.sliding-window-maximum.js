/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class DoubleQueue {
  constructor () {
    this.queue = []
  }
  getLeft () {
    return this.queue[0]
  }
  getRight () {
    return this.queue[this.queue.length - 1]
  }
  removeLeft () {
    this.queue.shift()
  }
  removeRight () {
    this.queue.pop()
  }
  addLeft (n) {
    this.queue.unshift(n)
  }
  addRight (n) {
    this.queue.push(n)
  }
  length () {
    return this.queue.length
  }
}
var maxSlidingWindow = function(nums, k) {
  const w = new DoubleQueue()
  let m = []
  for (let i = 0; i < nums.length; i ++) {
    while (w.length() > 0 && w.getLeft() < i - k + 1) {
      w.removeLeft()
    }
    while (w.length() > 0 && nums[w.getRight()] < nums[i]) {
      w.removeRight()
    }
    w.addRight(i)
    if (i >= k-1) {
      m.push(nums[w.getLeft()])
    }
  }
  return m
};

