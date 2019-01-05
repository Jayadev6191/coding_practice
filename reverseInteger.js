//Slower
function reverseInterger(num)  {
    let numStr = num.toString();
    let sIndex =  numStr.length - 1;
    let eIndex =  0;
  
    if(numStr[0] === "-")  {
      return parseInt("-" + strRev(numStr, sIndex, eIndex + 1));
    }
  
    if(numStr[numStr.length - 1] === "0")  {
      return parseInt(strRev(numStr, sIndex - 1, eIndex));
    }
  
    return parseInt(strRev(numStr, sIndex, eIndex));
}
  
  
  function strRev(str, sIndex, eIndex) {
    let result = "";
    for(var i = sIndex; i >= eIndex; i--) {
      result += str[i];
    }
  
    return result;
  }
  
  console.log(reverseInterger(120));
  var num = 0;
  console.log(Math.pow(2,32) - 1);



// Faster
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var rev = "";
    var a = x.toString().split("");
    for (var i=a.length-1; i >= 0; i--) {
        rev += a[i];
    }
    
    rev = parseInt(rev);
    
    if (rev > Math.pow(2,31) - 1) {
        return 0;
    }
    
    if(a[0] === "-") {
        rev *= -1;
    } 

    return rev;
};