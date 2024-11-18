// Definition for singly-linked list.
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(-1);
  let current = dummy; // Pointer to build the merged list

  //Traverse both lists and compare their values
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1; //Attach list1 node to merged list
      list1 = list1.next; // Move to the next node in list1
    } else {
      current.next = list2; //Attach list2 node to merged list
      list2 = list2.next; // Move to the next node in list2
    }
    current = current.next; // Move the current pointer
  }
  // If there are remaining nodes in either list, attach them
  current.next = list1 !== null ? list1 : list2;

  //Return the merged list, which starts from dummy.next
  return dummy.next;
};

// Test cases
const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log(mergeTwoLists(l1, l2)); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

/**
 * The `mergeTwoLists` function merges two sorted linked lists into a single sorted linked list.
 *
 * Problem Explanation:
 * - Given two sorted linked lists, `list1` and `list2`, we want to merge them into one sorted list.
 * - The merged list should be made by splicing together the nodes of the two lists.
 *
 * Approach:
 * - We use a dummy node to simplify the process of building the merged list.
 * - We maintain a `current` pointer that always points to the end of the merged list.
 * - Traverse both lists:
 *   - Compare the current values of `list1` and `list2`.
 *   - Attach the smaller value to the merged list and move the corresponding pointer.
 * - Once one list is fully traversed, attach the remaining nodes of the other list.
 * - Return `dummy.next` as the head of the merged list.
 *
 * Time Complexity:
 * - O(n + m): We traverse each node from `list1` and `list2` exactly once.
 *
 * Space Complexity:
 * - O(1): We use constant space because we are reusing the nodes of the input lists.
 *
 * Example:
 * - Input: list1 = 1 -> 2 -> 4, list2 = 1 -> 3 -> 4
 * - Process:
 *   - Compare 1 and 1: Attach 1 from `list1`, move `list1`
 *   - Compare 2 and 1: Attach 1 from `list2`, move `list2`
 *   - Compare 2 and 3: Attach 2 from `list1`, move `list1`
 *   - Compare 4 and 3: Attach 3 from `list2`, move `list2`
 *   - Attach 4 from `list1`, move `list1`
 * - Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4
 */
