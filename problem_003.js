// 3. Longest Substring Without Repeating Characters - https://leetcode.com/problems/longest-substring-without-repeating-characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let j = 0;
    let max = 0;
    const letters = {};
    while (i < s.length) {
        const c = s[i];
        if (letters[c]) {
            max = Math.max(max, i - j);
            while (s[j] != c) {
                delete letters[s[j]];
                j++;
            }
            j++;
        } else {
            letters[c] = true;
        }
        i++;
    }
    return Math.max(max, i - j);
};