/*
 Array of Array Products
Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.
Solve without using division and analyze your solution’s time and space complexities.

input:  arr = [8, 10, 2]
output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

input:  arr = [2, 7, 3, 4]
output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]
 */

function arrayOfArrayProducts(arr) {
    if(arr.length <= 1) return [];
    // your code goes here
    var res_array = [];
    var temp = 1;
    
    // [8 , 10 ,2]
    
    for(var i = 0; i < arr.length; i++) {
        if(i === 0) {
          res_array.push(temp);
        } else {
          temp = arr[i - 1] * temp;
          res_array.push(temp);
        }
    }
    
    temp = 1;
    
    // [ 1, 8, 80 ]
    
    for(var j = arr.length - 1; j >= 0; j--) {
        if(j === arr.length - 1) {
          arr[j] = temp * arr[j];
        } else {
          temp = temp * arr[j + 1];
          res_array[j] = res_array[j] * temp;
        }
    }
    
    return res_array;
  }
  
  arrayOfArrayProducts([8, 10, 2]);
    /*
    Visualizing the solution
    
    // arr [8, 10, 2]
    // temp 1
    
    // looping left -> right
    
    // current index 0
    // current index val 8
    // if index === 0  push temp to res_array
    // res_array [1]
    // temp 1
    
    // current index 1
    // current index val 10
    // temp = 1
    // current is at index 1, temp will be arr[index - 1] * temp = 1 * 8 = 8
    // push 8 into result array
    // res_array [1, 8]
    // temp 8
    
    // arr [8, 10, 2]
    // current index 2
    // current index val 2
    // temp = 8
    // current is at index 2, temp will be arr[index - 1] * temp = 10 * 8 = 80
    // res_array [1, 8, 80]
    
    // end of loop ? reset temp = 1
     
    // loop right -> left on result arr
    // [1, 8, 80]
    
    // if index is res_array.length - 1
    // res_array[index] = res_array[index] * temp = 80 * 1 = 80
    // [1,8,80]
    
    // current index = 1
    // current index value = 8
    // temp = 1
    // temp = temp * arr[index + 1] = 1 * 2 = 2
    // res_array[index] *= temp = 8 * 2 = 16;
    // [1, 16, 80]
    
    
    // current index = 0
    // current index value = 1
    // temp = 2
    // temp = temp * arr[index + 1] = 2 * 10 = 20
    // res_array[index] *= temp = 1 * 20 = 20;
    // [20,16,80]
    
    */