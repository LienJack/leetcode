/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  let func = (arr, m, n) => {
    let dp = (m, n) => {
      if (m ===2 && n === 2) {
        if (arr[1][1] === 1 || arr[1][0] + arr[0][1] === 2) {
          return 0
        } else if (arr[1][0] === 1 || arr[0][1] ===1) {
          return 1
        } 
      } else if (m < 2 || n <2) {
        // 单行
        if (m < 2) {
          return arr[m-1].includes(1) ? 0 : 1
        // 单列，，没有障碍物返回0，没有返回1
        } else {
          for (let i = 0; i < m; i++) {
            if (arr[i][0] === 1) {
              return 0
            }
          }
        } 
        return 1
      } else {
        return dp(m-1,n) + dp(m,n-1)
      }
    }
    return dp(m,n)
  }
  return func(obstacleGrid, obstacleGrid.length, obstacleGrid[0].length)
};

