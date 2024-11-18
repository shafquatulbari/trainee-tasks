/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n; // Base cases: if there are 1 or 2 steps, return n

  let first = 1; // Represents the ways to reach the first step
  let second = 2; // Represents the ways to reach the second step

  // Iterate from step 3 to n
  for (let i = 2; i < n; i++) {
    let third = first + second; // The number of ways to reach the current step
    first = second; // Update first to the previous second
    second = third; // Update second to the current number of ways
  }

  return second; // Return the total ways to reach the nth step
};

// Test cases
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(4)); // Output: 5
console.log(climbStairs(5)); // Output: 8
console.log(climbStairs(6)); // Output: 13

/**
 * The `climbStairs` function calculates the number of distinct ways to climb to
 * the top of a staircase with `n` steps, where you can either take 1 step or 2 steps at a time.
 *
 * Problem Explanation:
 * - Given a staircase with `n` steps, you can either climb 1 step or 2 steps at a time.
 * - The task is to determine how many distinct ways you can climb to the top.
 *
 * Approach:
 * - We use an iterative dynamic programming approach with constant space.
 * - We handle the base cases first:
 *   - If `n` is 1, there is only 1 way to climb the stairs: take 1 step.
 *   - If `n` is 2, there are 2 ways to climb the stairs: two 1-steps or one 2-step.
 * - For larger values of `n`, we use two variables, `first` and `second`, to store
 *   the number of ways to reach the two previous steps.
 * - We iterate from step 3 to `n` and update the number of ways to reach each step
 *   using the relation: `third = first + second`.
 * - This relation comes from the fact that to reach the current step, we can either:
 *   - Take a single step from `second` (the previous step).
 *   - Take a two-step jump from `first` (two steps before).
 * - We update `first` and `second` in each iteration to reflect the new step counts.
 *
 * Time Complexity:
 * - O(n): We make a single pass from step 3 to `n`.
 *
 * Space Complexity:
 * - O(1): We use only a few variables to store the number of ways, so the space used is constant.
 *
 * Example:
 * - Input: n = 5
 * - Process:
 *   - Step 1: `first = 1`, `second = 2`
 *   - Step 2: `third = first + second = 1 + 2 = 3`, then update `first = 2`, `second = 3`
 *   - Step 3: `third = first + second = 2 + 3 = 5`, then update `first = 3`, `second = 5`
 * - Output: 5 (There are 5 ways to climb 5 steps)
 *
 * Note:
 * - The loop runs from `2` to `n - 1` to account for all steps beyond the base cases.
 * - The result is stored in `second`, which represents the number of ways to reach the nth step.
 */
