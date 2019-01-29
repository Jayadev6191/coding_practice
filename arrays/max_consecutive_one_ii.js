/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if(nums.length === 0) return false;
    
    var start = 0;
    var end = 0;
    var max_len = 0;
    var indexOfZero = -1;
    
    while(end < nums.length) {
        if(nums[end] === 0) {
            if(indexOfZero > -1) {
                start = indexOfZero + 1;
            }
            indexOfZero = end;
        }
        
        max_len = Math.max(max_len, end - start + 1);
        end++;
    }
    
    return max_len;
};