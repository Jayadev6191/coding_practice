/**
 * @param {string} s
 * @return {number}
 * Time Complexity: O(m+n)
 * Space Complexity: O(m)
 */


var lengthOfLongestSubstring = function(s) {
    // return 0 if the string is empty
    if(!s) return 0;

    var max_len = Number.MIN_VALUE;
    var map = new Map();
    var start = 0;

    for(var end = 0; end < s.length; end++) {
        if(map.has(s[end])) {
            // update start
            start = Math.max(start, map.get(s[end]) + 1);
        } 
        // add new key/update existing key in the map with current end index
        map.set(s[end], end);
        max_len = Math.max(max_len, end - start + 1);
    }
    return max_len;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("tmmzuxt"));