/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null; // Initialize 'prev' as null to be the new tail
  let current = head; // Start with the head of the list

  while (current != null) {
    let next = current.next; //save the next node
    current.next = prev; //Reverse the current node's pointer
    prev = current; // Move prev to the current node
    current = next;
  }

  return prev; // prev become the new head of the reversed list
};

/**
 * The `reverseList` function reverses a singly linked list iteratively.
 *
 * Problem Explanation:
 * - Given the head of a singly linked list, we want to reverse the list so that the head
 *   becomes the tail and the tail becomes the head.
 *
 * Approach:
 * - We use an iterative approach with three main pointers: `prev`, `current`, and `next`.
 * - `prev` keeps track of the previous node, starting as `null` (which will be the new tail).
 * - `current` traverses through the list, starting at the head.
 * - `next` temporarily stores the next node to ensure we don't lose the reference as we reverse the link.
 *
 * Steps:
 * 1. Initialize `prev` to `null` and `current` to `head`.
 * 2. Traverse the list using a `while` loop until `current` becomes `null`:
 *    - Save `current.next` in `next` to keep the reference to the next node.
 *    - Reverse the `current` node's pointer to point to `prev`.
 *    - Move `prev` to `current` (advance `prev`).
 *    - Move `current` to `next` (advance `current`).
 * 3. Once the loop completes, `prev` will be the new head of the reversed list.
 *
 * Time Complexity:
 * - O(n): We traverse each node of the list once, where `n` is the number of nodes.
 *
 * Space Complexity:
 * - O(1): We use a constant amount of space regardless of the size of the list.
 *
 * Example:
 * - Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
 * - Process:
 *   - Iteration 1: 1 -> null, `prev` = 1, `current` = 2
 *   - Iteration 2: 2 -> 1 -> null, `prev` = 2, `current` = 3
 *   - Iteration 3: 3 -> 2 -> 1 -> null, `prev` = 3, `current` = 4
 *   - Iteration 4: 4 -> 3 -> 2 -> 1 -> null, `prev` = 4, `current` = 5
 *   - Iteration 5: 5 -> 4 -> 3 -> 2 -> 1 -> null, `prev` = 5, `current` = null
 * - Output: 5 -> 4 -> 3 -> 2 -> 1 -> null
 *
 * Final Output:
 * - The function returns `prev`, which is the new head of the reversed list.
 */

// Test cases
// Example 1
let head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

console.log(reverseList(head)); // Output: 5 -> 4 -> 3 -> 2 -> 1 -> null
