/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let map1 = {}
  let map2 = {}
  s.split('').forEach(item => {
    if (item in map1) {
      map1[item] ++
    } else {
      map1[item] = 1
    }
  })
  t.split('').forEach(item => {
    if (item in map2) {
      map2[item] ++
    } else {
      map2[item] = 1
    }
  })
  if(Object.keys(map1).length !== Object.keys(map2).length) return false
  for (let item in map1) {
    if (map1[item] && map2[item]) {
      if (map1[item] !== map2[item]) {
        return false
      }
    } else {
      return false
    }
  }
  return true
};

