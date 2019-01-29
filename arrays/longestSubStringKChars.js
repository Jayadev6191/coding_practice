/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 
 * Given a string, find the length of the longest substring T that contains at most k distinct characters.
 * 
 * Input: s = "eceba", k = 2
 * Output: 3
 * Explanation: T is "ece" which its length is 3.
 * 
 * Input: s = "aa", k = 1
 * Output: 2
 * Explanation: T is "aa" which its length is 2.
 */


var lengthOfLongestSubstringKDistinct = function(s, k) {
    var start = 0;
    var end = 0;
    var max_len = 0;
    var dict = new Map();
    var longest_sub_str = "";

    while(end < s.length) {
        var key = s[end];

        if(dict.has(key)) {
            var current_val = dict.get(key);
            dict.set(key, current_val++);
        } else {
            dict.set(key, 1);
        }
        
        // logic to track longestSubstring - start
        /* return longest_sub_str if asked to return str instead of count */
        if(dict.size <= k) {
            longest_sub_str+= s[end];
        }
        // logic to track longestSubstring - end


        while(dict.size > k) {
            var s_key = s[start];
            current_val = dict.get(s_key);
            current_val--;
            if(current_val === 0) {
                dict.delete(s_key);
            } else {
                dict.set(s_key, current_val);
            }
            start++;
        }

        max_len = Math.max(max_len, end - start + 1);
        end++;
    }
    console.log(longest_sub_str);
    return max_len;
};


console.log(lengthOfLongestSubstringKDistinct("aaabbbc", 2));

/*
    "eceba"
     s
        e

     e:1,
     c:1,


     unique_str = "ec"
 */