/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [[]]; // Start with an empty subset

  for (let num of nums) {
    // For each number, add it to all existing subsets to create new subsets
    let newSubsets = result.map((subset) => [...subset, num]);
    result = result.concat(newSubsets); // Add the new subsets to the result
  }

  return result;
};

/**
 * The `subsets` function generates all possible subsets (the power set) of a given array of distinct integers.
 *
 * Problem Explanation:
 * - Given an array `nums` of distinct integers, we need to return all possible subsets.
 * - The solution should include the empty subset as well.
 *
 * Approach:
 * - We use an iterative approach to build the subsets.
 * - Start with the `result` array containing only the empty subset.
 * - For each number in `nums`, we generate new subsets by adding the current number to each existing subset.
 * - Use the `map` method to create copies of existing subsets, each with the current number added.
 * - Concatenate these new subsets to `result` to form the updated list of subsets.
 *
 * Steps:
 * 1. Initialize `result` with `[[]]` to include the empty subset.
 * 2. Iterate through each number in `nums`:
 *    - For each `num`, use `map` to create `newSubsets` by adding `num` to each subset in `result`.
 *    - Concatenate `newSubsets` with `result` to include the newly created subsets.
 * 3. Return `result`, which now contains all possible subsets.
 *
 * Time Complexity:
 * - O(2^n): There are 2^n possible subsets for an array of length `n`.
 * - Each subset generation involves copying existing subsets, making the overall complexity O(2^n).
 *
 * Space Complexity:
 * - O(2^n): We need space to store all subsets, and there are 2^n possible subsets.
 *
 * Example:
 * - Input: nums = [1, 2, 3]
 * - Process:
 *   - Start with `result = [[]]`
 *   - Add 1: `newSubsets = [[1]]`, result = `[[], [1]]`
 *   - Add 2: `newSubsets = [[2], [1, 2]]`, result = `[[], [1], [2], [1, 2]]`
 *   - Add 3: `newSubsets = [[3], [1, 3], [2, 3], [1, 2, 3]]`, result = `[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]`
 * - Output: `[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]`
 */

// Test cases
console.log(subsets([1, 2, 3])); // Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
console.log(subsets([0])); // Output: [[], [0]]