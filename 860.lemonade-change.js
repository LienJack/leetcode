/*
 * @lc app=leetcode id=860 lang=javascript
 *
 * [860] Lemonade Change
 */
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let hand = [] // 存储零钱
  // 是否顾客还在
  while (bills.length)  {
    let money = bills.shift ()
    if (money === 5) {
      hand.push(money)
    } else {
      // 取最大值
      hand.sort((a,b) => b-a)
      // 减去顾客饮料的钱就是需要找给顾客的零钱
      let change = money - 5
      for (let i = 0, len = hand.length; i < len; i++) {
        if(hand[i] <= change) {
          change -= hand[i]
          hand.splice(i, 1)
          i -- // 删除元素数组发生变化，要维持刚才的
        }
        if (change === 0) {
          break;
        }
      }
      if (change !==0) {
        return false
      } else {
        hand.push(money)
      }
    }
  }
  return true
};

