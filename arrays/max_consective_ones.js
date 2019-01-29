/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var max_ones = 0;
    var counter = 0;
    
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            counter = 0;   
        } else {
            counter++;
            max_ones = Math.max(max_ones, counter);   
        }
    }
    
    return max_ones;
};
