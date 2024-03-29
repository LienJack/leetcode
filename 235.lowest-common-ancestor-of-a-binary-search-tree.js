/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (p.val === root.val) {
      return p
  }
  if (q.val === root.val) {
      return q
  } 
  if (p.val > root.val && q.val > root.val) {
      return lowestCommonAncestor(root.right, p, q)
  } else if (p.val < root.val && q.val < root.val) {
      return lowestCommonAncestor(root.left, p, q)
  } else {
      return root
  }
};

