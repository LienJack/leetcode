/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stach = []
  let map = { '{':'}', "[": "]","(":")" }  
  let arr = s.split("")
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] in map) {
      stach.push(arr[i])
    } else {
      let tmp = stach.pop()
      if (map[tmp]!==arr[i]) return false 
    }
  } 
  if (!stach.length) {
    return true
  } else {
    return false
  }
    
};

