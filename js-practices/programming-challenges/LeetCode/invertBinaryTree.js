/**
 * Definition for a binary tree node.
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
const tree = new TreeNode(4, 2, 7);
console.log(tree);
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

let invertTree = function (root) {};
