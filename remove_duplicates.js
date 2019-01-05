var arr = [3,3,2,1,4,7,7];

var final_arr = removeDuplicates(arr);
console.log("final array is [" + final_arr + "]");

function removeDuplicates(arr) { 
  var lookup = {};
  var result = [];
  
  for( var i=0; i < arr.length; i++ ) {
      if(!lookup.hasOwnProperty([arr[i]])) {
          result.push(arr[i]);
          lookup[arr[i]]=true;
      }
  }
  
  return result;
}