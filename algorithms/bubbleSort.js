var unsorted_arr = [20, 10, 30, 60, 40, 50];

function bubbleSort(arr) {
  /*
    TIME COMPLEXITY: O(n^2)
    SPACE COMPLEXITY: O(1) (IN-PLACE)
    EXECUTION TYPE: ITERATIVE
   */
  var is_sorted = false;

  while (!is_sorted) {
    is_sorted = true;
    for(var j = 0; j < arr.length; j++) {
        if(arr[j] > arr[j+1]) {
            var temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
            is_sorted = false;
        }
    }
  }

  return arr;
}

console.log(bubbleSort(unsorted_arr));
