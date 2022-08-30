/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = "";
  const firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    const letter = firstStr[i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== letter) return commonPrefix;
    }
    commonPrefix += letter;
  }

  return commonPrefix;
}
// @lc code=end
