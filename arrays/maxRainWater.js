var maxArea = function(height) {
    var max = Number.MIN_VALUE;
      
    for(var i = 0; i < height.length; i++) {
        for(var j = i + 1; j < height.length; j++) {
            var min = Math.min(height[i], height[j]);
            max = Math.max(max, min * (j-i));
        }
        console.log(max);
    }
      
    return max;
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]));