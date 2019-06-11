/*
 * @lc app=leetcode id=682 lang=javascript
 *
 * [682] Baseball Game
 */
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let res = []
  // 上轮数据
  let pre1
  // 上上轮数据
  let pre2
  ops.forEach(item => {
    switch (item) {
      case 'C':
        if (res.length) {
          res.pop()
          break
        }
      case 'D':
        pre1 = res.pop()
        res.push(pre1, pre1 * 2)
        break
      case '+':
        pre1 = res.pop()
        pre2 = res.pop()
        res.push(pre2, pre1, pre1 + pre2)
        break
        default:
          res.push(item * 1)
    }
  })
  return res.reduce((total, num) => {
    return total + num
  })
};

