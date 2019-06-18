/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let vecor = matrix.length
  for (let i = 0, len = vecor / 2; i < len; i++) {
    for (let j = 0, tmp; j < vecor; j++) {
      tmp = matrix[i][j]
      matrix[i][j] = matrix[vecor - i - 1][j]
      matrix[vecor - i - 1][j] = tmp
    }
  }
  for (let i = 0; i < vecor; i++) {
    for (let j = 0, tmp; j < i; j++) {
      tmp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = tmp
    }
  }
  return matrix
};

