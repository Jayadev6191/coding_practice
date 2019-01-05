/*
    Time Complexity O(n)
    Space Complexity O(1)
*/
var rotateLeft = function(nums, k) {
    if(nums.length > 1) {
        k = k % nums.length;
        reverse(nums, 0, k-1);
        reverse(nums, k, nums.length - 1);
        reverse(nums, 0, nums.length -1)
        return nums;
    }
};

var rotateRight = function(nums, k) {
    if(nums.length > 1) {
        k = k % nums.length;
        reverse(nums, 0, nums.length -1)
        reverse(nums, 0, k-1);
        reverse(nums, k, nums.length - 1);
        return nums;
    }
};
            
  var reverse = function(arr, start, end) {
      while(start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
      }
    
      return arr;
  };

  console.log(rotateLeft([1,2,3,4,5,6], 8));
  console.log(rotateRight([1,2,3,4,5,6], 8));