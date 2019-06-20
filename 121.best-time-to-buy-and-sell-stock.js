/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let count = 0;
  for (let i = 0, len = prices.length; i < len; i++) {
    for (let j = i; j < len - 1; j++) {
      if (prices[j + 1] > prices[j]) {
        count += prices[j + 1] - prices[j]
        i = j
      } else {
        i = j
        break
      }
    }
  }
  return count 
};

