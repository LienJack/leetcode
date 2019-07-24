/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1
  let pow = Math.abs(n)
  let result = n % 2 === 0 ? myPow(x*x, pow/2) : myPow(x*x, (pow-1)/2) * x
  if (n < 0) return 1 / result
  else return result
};

