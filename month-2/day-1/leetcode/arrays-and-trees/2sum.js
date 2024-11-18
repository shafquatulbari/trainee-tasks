/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    // Check if the complement is already in the map
    if (map.has(complement)) {
      return [map.get(complement), i]; //map.get(complement) returns the index of the complement
    }
    // Add the current number and its index to the map
    map.set(nums[i], i);
  }
  //return an empty array if no solution is found
  return [];
};

/**
 * The `twoSum` function finds two numbers in an array that add up to a given target.
 * It uses a hash map to achieve an efficient O(n) time complexity.
 *
 * Problem Explanation:
 * - Given an array of integers `nums` and an integer `target`, we want to find
 *   two numbers in `nums` such that they add up to `target`.
 * - The function should return the indices of these two numbers.
 *
 * Approach:
 * - We use a hash map to store each number as we iterate through the array.
 * - The key in the hash map is the number itself, and the value is its index.
 * - For each number in the array:
 *   1. We calculate the `complement` as `target - nums[i]`.
 *   2. We check if the `complement` is already in the hash map.
 *   3. If it exists, we return the indices of the `complement` and the current number.
 *   4. If it does not exist, we store the current number and its index in the hash map.
 *
 * Example:
 * - Input: nums = [2, 7, 11, 15], target = 9
 * - Iteration 1: nums[0] = 2, complement = 9 - 2 = 7
 *   - 7 is not in the map. Store 2 in the map: { 2: 0 }
 * - Iteration 2: nums[1] = 7, complement = 9 - 7 = 2
 *   - 2 is in the map with index 0. Return [0, 1].
 *
 * Time Complexity:
 * - O(n): We iterate through the array once, performing O(1) operations for each element.
 *
 * Space Complexity:
 * - O(n): We use a hash map to store each number and its index.
 *
 * Final Output:
 * - The function returns an array containing the indices of the two numbers that add up to the target.
 */

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); //Output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;

console.log(twoSum(nums2, target2)); //Output: [1, 2]
