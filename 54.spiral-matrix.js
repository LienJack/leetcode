/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
   // 处理遍历的过程
   let map = (arr, r = []) => {
    for (let i =0,len=arr.length; i<len; i++) {
      if (i === 0) {
        r = r.concat(arr[i])
      } else if (i === len -1) {
        r = r.concat(arr[i].reverse())
      } else {
        r. push(arr[i].pop())
      }
    }
    arr.shift()
    arr.pop()
    for (let i = arr.length -1;i>=0;i--) {
      r.push(arr[i].shift())
    }
    if (arr.length) {
      return map(arr,r)
    } else {
      return r
    }
  }
  return map (matrix, [])
};

