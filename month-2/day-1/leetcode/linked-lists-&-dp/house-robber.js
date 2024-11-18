/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0; // No houses to rob
  if (nums.length === 1) return nums[0]; // Only one house to rob
  if (nums.length === 2) return Math.max(nums[0], nums[1]); // Pick the house with more money

  // Create a DP array to store the maximum amount that can be robbed up to each house
  let dp = new Array(nums.length);
  dp[0] = nums[0]; // The max amount robbed from the first house is just nums[0]
  dp[1] = Math.max(nums[0], nums[1]); // The max amount from the first two houses

  // Fill the DP array
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1]; // The last element contains the maximum amount that can be robbed
};

// Test cases
console.log(rob([2, 3, 2])); // Output: 3
console.log(rob([1, 2, 3, 1])); // Output: 4

/**
 * The `rob` function solves the House Robber problem using a dynamic programming approach.
 *
 * Problem Explanation:
 * - Given an array `nums` where each element represents the amount of money in a house,
 *   you need to determine the maximum amount of money you can rob without robbing two
 *   adjacent houses.
 *
 * Approach:
 * - We use a dynamic programming (DP) array to store the maximum amount of money that can
 *   be robbed up to each house.
 * - The idea is to decide for each house whether to rob it or skip it:
 *   1. If we rob the current house, we add its value to the maximum amount from two houses before.
 *   2. If we skip the current house, we take the maximum amount from the previous house.
 * - We take the maximum of these two options to get the best result for each house.
 *
 * Steps:
 * 1. Handle base cases:
 *    - If there are no houses (`nums.length === 0`), return 0.
 *    - If there is only one house, return `nums[0]`.
 *    - If there are two houses, return the maximum of `nums[0]` and `nums[1]`.
 * 2. Initialize a DP array:
 *    - `dp[0] = nums[0]`: The maximum amount robbed from the first house.
 *    - `dp[1] = Math.max(nums[0], nums[1])`: The maximum amount from the first two houses.
 * 3. Iterate through the rest of the houses:
 *    - For each house `i` from 2 to `nums.length - 1`, calculate:
 *      `dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])`
 *    - This formula ensures we either skip the current house or rob it, depending on which option yields more money.
 * 4. Return `dp[nums.length - 1]` as the final result.
 *
 * Time Complexity:
 * - O(n): We iterate through the `nums` array once, where `n` is the number of houses.
 *
 * Space Complexity:
 * - O(n): We use a DP array of size `n` to store the results.
 *
 * Example:
 * - Input: nums = [2, 7, 9, 3, 1]
 * - Process:
 *   - dp[0] = 2
 *   - dp[1] = 7
 *   - dp[2] = Math.max(7, 2 + 9) = 11
 *   - dp[3] = Math.max(11, 7 + 3) = 11
 *   - dp[4] = Math.max(11, 11 + 1) = 12
 * - Output: 12 (The maximum amount that can be robbed)
 */
