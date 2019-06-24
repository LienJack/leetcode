/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.input = []
  this.output = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.input.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  while (this.input.length !== 0) {
    this.output.push(this.input.pop())
  }
  let tmp = this.output.pop()
  while (this.output.length !== 0) {
    this.input.push(this.output.pop())
  }
  return tmp
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  while (this.input.length !== 0) {
    this.output.push(this.input.pop())
  }
  let tmp = this.output.pop()
  this.input.push(tmp)
  while (this.output.length !== 0) {
    this.input.push(this.output.pop())
  }
  return tmp
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.input.length === 0 ? true : false
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

