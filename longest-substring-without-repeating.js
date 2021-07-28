// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s = '') {
  const map = {};
  let result = '';
  for (let index1 = 0; index1 < s.length; index1++) {
    for (let index2 = index1; index2 < s.length; index2++) {
      const candidat = s.slice(index1, index2 + 1);
      console.log(candidat, 'char=', s[index1], s[index2]);
      if (
        candidat.indexOf(s[index2]) === candidat.lastIndexOf(s[index2]) &&
        candidat.length > result.length
      ) {
        result = candidat;
      }
    }
  }
  console.log(map);
  return result;
};

console.log('=>', lengthOfLongestSubstring('abcabcbb'));
