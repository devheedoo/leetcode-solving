/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    const diff = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === diff) return [i, j];
    }
  }
  return [];
}
// @lc code=end
