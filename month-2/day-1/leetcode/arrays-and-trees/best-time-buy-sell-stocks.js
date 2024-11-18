/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity; //Initialize the min price to the largest val
  let maxProfit = 0; // Init max profit to 0

  for (let i = 0; i < prices.length; i++) {
    //if we find a smaller price update minPrice
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    //Otherwise, calculate the profit if we sell at prices[i]
    else {
      const profit = prices[i] - minPrice;
      maxProfit = Math.max(maxProfit, profit); // Update maxProfit if we found a better profit
    }
  }
  return maxProfit; // Return the max profit found
};

/**
 * The `maxProfit` function calculates the maximum profit from buying and
 * selling a stock given an array of stock prices on different days.
 *
 * Problem Explanation:
 * - You are given an array `prices` where `prices[i]` represents the price of a stock on day `i`.
 * - You need to maximize your profit by choosing a single day to buy and a single day to sell.
 * - You cannot sell a stock before you buy it.
 *
 * Approach:
 * - We use a single-pass greedy algorithm to solve the problem efficiently.
 * - Initialize `minPrice` to a very large value (`Infinity`) to keep track of the minimum price encountered so far.
 * - Initialize `maxProfit` to 0, as we cannot have a negative profit.
 * - Iterate through each price in the array:
 *   1. If the current price is less than `minPrice`, update `minPrice` to the current price.
 *   2. Otherwise, calculate the profit if we sell at the current price.
 *   3. Update `maxProfit` if the calculated profit is greater than the previous `maxProfit`.
 *
 * Example:
 * - Input: prices = [7, 1, 5, 3, 6, 4]
 * - Iteration 1: prices[0] = 7, minPrice = 7, maxProfit = 0
 * - Iteration 2: prices[1] = 1, minPrice = 1, maxProfit = 0
 * - Iteration 3: prices[2] = 5, profit = 5 - 1 = 4, maxProfit = 4
 * - Iteration 4: prices[3] = 3, profit = 3 - 1 = 2, maxProfit = 4
 * - Iteration 5: prices[4] = 6, profit = 6 - 1 = 5, maxProfit = 5
 * - Iteration 6: prices[5] = 4, profit = 4 - 1 = 3, maxProfit = 5
 * - Final output: maxProfit = 5
 *
 * Time Complexity:
 * - O(n): We make a single pass through the array, where `n` is the length of the array.
 *
 * Space Complexity:
 * - O(1): We use a constant amount of space, regardless of the input size.
 *
 * Final Output:
 * - The function returns the maximum profit achievable by buying and selling once.
 */

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); //Output: 5

const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); //Output: 0
