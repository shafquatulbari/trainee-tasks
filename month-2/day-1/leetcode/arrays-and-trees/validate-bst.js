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
 * @return {boolean}
 */
var isValidBST = function (root, min = -Infinity, max = Infinity) {
  // Base case: an empty tree is a valid BST
  if (root === null) return true;

  // Check if the current node violates the BST properties
  if (root.val <= min || root.val >= max) return false;

  // Recursively check the left and right subtrees with updated bounds
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};

/**
 * The `isValidBST` function checks if a binary tree is a valid Binary Search Tree (BST).
 * A valid BST must satisfy the following conditions:
 * - The left subtree of a node contains only nodes with values less than the node's value.
 * - The right subtree of a node contains only nodes with values greater than the node's value.
 * - Both the left and right subtrees must also be valid BSTs.
 *
 * Function Definition:
 * - The function uses recursion to traverse the tree and validate each node.
 * - We use `min` and `max` parameters to maintain the valid range for each node:
 *   - `min`: The lower bound that the current node's value must be greater than.
 *   - `max`: The upper bound that the current node's value must be less than.
 *
 * Parameters:
 * - `root`: The current node in the binary tree.
 * - `min`: The lower bound for the current node's value (default is `-Infinity`).
 * - `max`: The upper bound for the current node's value (default is `Infinity`).
 *
 * Base Case:
 * - If `root` is `null`, we return `true` because an empty tree is a valid BST.
 *
 * Main Logic:
 * - Check if the current node's value violates the BST properties:
 *   - If `root.val` is less than or equal to `min` or greater than or equal to `max`, return `false`.
 * - Recursively check the left and right subtrees:
 *   - For the left subtree, the `max` bound is updated to `root.val`.
 *   - For the right subtree, the `min` bound is updated to `root.val`.
 * - Return `true` only if both subtrees are valid BSTs.
 *
 * Time Complexity:
 * - O(n): We visit each node exactly once, where `n` is the number of nodes in the tree.
 *
 * Space Complexity:
 * - O(h): The space complexity is proportional to the height of the tree (`h`), due to the recursive call stack.
 *   - In the worst case (a completely unbalanced tree), `h` can be `n`.
 *   - In the best case (a balanced tree), `h` is `log(n)`.
 */

root = {
  val: 2,
  left: { val: 1, left: null, right: null },
  right: { val: 3, left: null, right: null },
};

console.log(isValidBST(root)); //Output: true

root = {
  val: 5,
  left: { val: 1, left: null, right: null },
  right: {
    val: 4,
    left: { val: 3, left: null, right: null },
    right: { val: 6, left: null, right: null },
  },
};

console.log(isValidBST(root)); //Output: false
