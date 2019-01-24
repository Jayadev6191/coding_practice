/*
    Given a non-empty array of digits representing a non-negative integer output plus one integer

    Example:
    digits: [1,2,3]
    Output: [1,2,5]

    Thought Process through steps
    /* 
        check if the lastIndexOf digits is 9

        If Not 9
            add + 1 to lastIndex Value return
        Else
            // [1,8,9]
               [1,8,0] - additional 1
               [1,9,0] - additional 0
            // [9,9,9]
               [9,9,0] - additional 1
               [9,0,0] - addiotional 1
               [0,0,0] - additonal 1
               if at the start of the array and additional is not 0
               unshift 1 to the array
               [1,0,0,0]
            // [1,9,9]
               [1,9,0] - additional 1
               [1,0,0] - additonal 1
               [2,0,0] - additional 0
*/

var digits = [9,9,9];

var plusOne = function(digits) {
    var count = digits.length - 1;
    var borrow = 0;
    
    if(digits[count] < 9) {
        digits[count]++;
    } else {
        // lastIndexOf the array is 9 - special case
        while(count >= 0) {
            if(digits[count] === 9) {
                digits[count] = 0;
                borrow = 1;
            } else {
                // add one and break since digits[count] can atmost be 9 but not greater than 9 
                if(borrow == 1) {
                    digits[count]++;
                }
                borrow = 0;
                break;
            }
            count--;
        }

        if(borrow === 1) {
            digits.unshift(borrow);
            borrow = 0;
        }
    }

    return digits;
}

console.log(plusOne(digits));