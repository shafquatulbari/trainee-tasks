/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// most efficient solution using recursion
var maxDepth = function (root) {
  // Base case: if tree is empty, the depth is 0
  if (root == null) {
    return 0;
  }
  //Recursively find the depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // The depth of the current tree is 1 + the maximum depth of the left and right subtrees
  return Math.max(leftDepth, rightDepth) + 1;
};

/**
 * The `maxDepth` function calculates the maximum depth of a binary tree.
 * It uses a recursive approach to explore all paths from the root to the leaves,
 * and returns the longest path length.
 *
 * Step-by-Step Trace for a Sample Binary Tree:
 *
 *          3
 *         / \
 *        9   20
 *            / \
 *           15  7
 *
 * 1. We start by calling `maxDepth(tree)`:
 *    - `root.val` is 3, and we need to find the depth of both the left and right subtrees.
 *
 * 2. We call `maxDepth(tree.left)`:
 *    - `root.val` is 9, the left child of 3.
 *    - Both `tree.left.left` and `tree.left.right` are `null`, so:
 *      - `maxDepth(tree.left.left)` returns 0 (base case).
 *      - `maxDepth(tree.left.right)` returns 0 (base case).
 *    - The depth of the subtree rooted at 9 is `Math.max(0, 0) + 1 = 1`.
 *    - We return 1.
 *
 * 3. We call `maxDepth(tree.right)`:
 *    - `root.val` is 20, the right child of 3.
 *    - We need to find the depth of the left and right subtrees of 20.
 *
 * 4. We call `maxDepth(tree.right.left)`:
 *    - `root.val` is 15, the left child of 20.
 *    - Both `tree.right.left.left` and `tree.right.left.right` are `null`, so:
 *      - `maxDepth(tree.right.left.left)` returns 0 (base case).
 *      - `maxDepth(tree.right.left.right)` returns 0 (base case).
 *    - The depth of the subtree rooted at 15 is `Math.max(0, 0) + 1 = 1`.
 *    - We return 1.
 *
 * 5. We call `maxDepth(tree.right.right)`:
 *    - `root.val` is 7, the right child of 20.
 *    - Both `tree.right.right.left` and `tree.right.right.right` are `null`, so:
 *      - `maxDepth(tree.right.right.left)` returns 0 (base case).
 *      - `maxDepth(tree.right.right.right)` returns 0 (base case).
 *    - The depth of the subtree rooted at 7 is `Math.max(0, 0) + 1 = 1`.
 *    - We return 1.
 *
 * 6. Back at `tree.right` (node 20):
 *    - The depth of the subtree rooted at 20 is `Math.max(1, 1) + 1 = 2`.
 *    - We return 2.
 *
 * 7. Back at `tree` (root node 3):
 *    - The depth of the entire tree is `Math.max(1, 2) + 1 = 3`.
 *    - We return 3.
 *
 * Final Output:
 * - The maximum depth of the binary tree is 3.
 *
 * How Recursion Works:
 * - The function recursively explores all paths from the root to the leaves.
 * - At each node, it computes the maximum depth of its left and right subtrees.
 * - The base case ensures that when a `null` node is reached, the function returns 0.
 * - The recursion unwinds from the bottom to the top, calculating the longest path.
 */

// Test cases
const tree1 = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

console.log(maxDepth(tree1)); // Output: 3

const tree2 = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: {
    val: 3,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
};

console.log(maxDepth(tree2)); // Output: 3
