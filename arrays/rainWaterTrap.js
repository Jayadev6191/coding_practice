/*
    Thought process

    - Maintain Two pointers start and end
    - Keep moving those pointers in opposite direction based on the value comparision with left_max and right_max
    - Maintain two results
        - result -> overall units
        - currentResult -> current unit count between two elevations
    - Water can only be trapped if unit has left 

*/

var input = [0,1,0,2,1,0,1,3,2,1,2,1];
var stack = [];

var findWater = function(input) {
    var left_max = 0;
    var right_max = 0;
    var start = 0;
    var end = input.length - 1;
    var result = 0;

    while(start <= end) {
        if(input[start] < input[end]) {
            if(input[start] >= left_max) {
                left_max = input[start];
            } else {
                result += left_max - input[start];
            }
            start++;
        } else {
            if(input[end] >= right_max) {
                right_max = input[end];
            } else {
                result += right_max - input[end];
            }
            end--;
        }
    }

    console.log("result", result);
};

findWater(input);