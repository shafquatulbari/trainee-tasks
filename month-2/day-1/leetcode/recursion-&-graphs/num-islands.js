/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
  if (grid.length === 0) return 0; // Return 0 if the grid is empty

  let numIslands = 0; // To keep track of the number of islands

  // Helper function to perform DFS and mark visited land
  const dfs = (i, j) => {
    // Check if the current cell is out of bounds or is water ('0')
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === "0"
    ) {
      return;
    }

    grid[i][j] = "0"; // Mark the current cell as visited by setting it to '0'

    // Visit all 4 adjacent cells (up, down, left, right)
    dfs(i + 1, j); // Down
    dfs(i - 1, j); // Up
    dfs(i, j + 1); // Right
    dfs(i, j - 1); // Left
  };

  // Iterate through each cell in the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        // If we find land ('1'), it's a new island
        numIslands++;
        dfs(i, j); // Perform DFS to mark all connected land
      }
    }
  }

  return numIslands;
};

// Test cases
console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
); // Output: 1
console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
); // Output: 3

/**
 * The `numIslands` function counts the number of islands in a 2D grid.
 * An island is defined as a group of connected land cells ('1') surrounded by water ('0').
 * The function uses Depth-First Search (DFS) to traverse and mark all cells in an island.
 *
 * @param {character[][]} grid - A 2D grid of '1's (land) and '0's (water)
 * @return {number} - The total number of islands
 *
 * Approach:
 * - We iterate through each cell in the grid:
 *   - If the cell is land ('1'), it indicates the start of a new island.
 *   - We increment the `numIslands` counter and perform DFS to mark the entire island as visited.
 * - The DFS function:
 *   - Marks the current cell as visited by changing it to '0'.
 *   - Recursively explores all four neighboring cells (up, down, left, right).
 *   - Stops when it reaches water ('0') or goes out of bounds.
 *
 * Time Complexity:
 * - O(m × n), where `m` is the number of rows and `n` is the number of columns in the grid.
 * - Each cell is visited at most once, leading to linear time complexity.
 *
 * Space Complexity:
 * - O(m × n) in the worst case, due to the recursive call stack when the grid is entirely filled with land.
 *
 * Example:
 * - Input: [
 *     ["1", "1", "0", "0", "0"],
 *     ["1", "1", "0", "0", "0"],
 *     ["0", "0", "1", "0", "0"],
 *     ["0", "0", "0", "1", "1"]
 *   ]
 * - Execution:
 *   - Start at (0, 0), find '1', increment `numIslands` to 1, and perform DFS to mark the island.
 *   - Find another '1' at (2, 2), increment `numIslands` to 2, and perform DFS.
 *   - Find another '1' at (3, 3), increment `numIslands` to 3, and perform DFS.
 * - Output: 3 (There are 3 separate islands)
 */
