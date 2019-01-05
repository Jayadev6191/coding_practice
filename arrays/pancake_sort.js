var arr = [1, 5, 4, 3, 2];

function flip(arr, k) {
    var start = 0;
    
    while(start < k) {
        var temp = arr[k];
        arr[k] = arr[start];
        arr[start] = temp;
        start++;
        k--;
    }
    
    return arr;
}

function findMax(arr, range) {
    // find Max number in the unsorted range
    var max_num = Number.MIN_VALUE;
    var index = 0;

    for(var i = 0; i < range; i++) {
        if(arr[i] > max_num) {
            max_num = arr[i];
            index = i;
        }
    }

    // console.log(`max num is ${max_num}`);
    return {
        max_num,
        index
    };
}

function pancakeSort(arr) {
    var unsorted_count = arr.length;
    console.log(arr);
    var count = 0;
    while(unsorted_count > 0) {
        // findMax element and swap it with first element in the array
        var swap_obj = findMax(arr, unsorted_count);

        if(unsorted_count - 1 !== swap_obj.index) {
            // arr[swap_obj.index]
            var temp = arr[swap_obj.index];
            arr[swap_obj.index] = arr[0];
            arr[0] = temp;
            //console.log("after swap", arr);
            flip(arr, unsorted_count - 1);
            //console.log("after reverse", arr);
            console.log(arr);
        }
        unsorted_count--;
    }
    return arr;
}

console.log("panCakeSort",pancakeSort(arr));