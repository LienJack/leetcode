/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let b = []
  let odd = 0
  let even = 1
  for (let i = 0; i < A.length; i++) {
    let min = A[i]
    for (let j = i; j <A.length; j++) {
      if (A[j] < min) {
        let c = min
        min = A[j]
        A[j] = c
      }
    }
    if (min % 2 !== 0) {
      b[even] = min
      even += 2
    } else {
      b[odd] = min
      odd += 2
    }
  }
  return b  
};

