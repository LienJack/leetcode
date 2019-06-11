/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  let res = []
  let reg = /1{2,}/g
  // 把二位数组重新表达
  matrix = matrix.map(item => {
    let str = item.join('')
    let r = reg.exec(str)
    let rs = []
    while (r) {
      rs.push([r.index,r.index + r[0].length])
      r = reg.exec(str)
    }
    return rs
  })
  let maxRect = (arr, result, n = 1) => {
    // 弹出第一行
    let top = arr.pop()
    // 弹出第二行
    let next = arr.pop()
    // 记录第一行起始点和截止点
    let tt 
    // 记录第二行起始点和截止点
    let nn 
    // 交叉的起始索引
    let start 
    // 交叉的起始索引
    let end
    let width = 1
    let maxWidth = 1
    n ++
    for (let i =0 ,il = tp.length;i < il; i++) {
      tt = top[i]
      for (let j = 0, jl = next.length; j < jl; j++) {
        nn = next[j]
        width  = Math.min(tt[1], nn[1]) - Math.max(tt[0], nn[0])
        if (width > maxWidth) {
          maxWidth = width // ??
          start = Math.max(tt[0], nn[0])
          end = Math.min(tt[1], nn[1])
        }
      }
    }
    if (statr === undefined || end === undefined) {
      if (n<3) {
        return false
      } else {
        width = top[0][1] - top[0][0] + 1
        if (width > 0) {
          result.push((n-1) * width)
        }
      }
    } else {
      arr.push([stat,end])
      maxRect(arr,result, n++)
    }
    while (arr.length > 1) {
      maxRect([].concat(arr),result)
      arr.pop()
    }
    let max = 0
    let item = result.pop()
    while (item) {
      if (item > max) {
        max = item 
      }
      item = result.pop()
    }
    return max > 0 ? max : -1
  }
  return 0
};

