function spiralCopy(inputMatrix) {
    var rowStart = 0;
    var rowEnd = inputMatrix.length - 1;
    var colStart = 0;
    var colEnd = inputMatrix[0].length - 1;
    var result = [];

    while(rowStart <= rowEnd && colStart <= colEnd) {
        for(var i = colStart; i <= colEnd; i++) {
            console.log(inputMatrix[rowStart][i]);
            result.push(inputMatrix[rowStart][i]);
        }
        rowStart++;

        for(var j = rowStart; j <= rowEnd; j++) {
            console.log(inputMatrix[j][colEnd]);
            result.push(inputMatrix[j][colEnd]);
        }
        colEnd--;

        if(rowStart <= rowEnd) {
            for(var k = colEnd; k >= colStart; k--) {
                console.log(inputMatrix[rowEnd][k]);
                result.push(inputMatrix[rowEnd][k]);
            }
            rowEnd--;
        }

        if(colStart <= colEnd) {
            for(var l = rowEnd; l >= rowStart; l--) {
                console.log(inputMatrix[l][colStart]);
                result.push(inputMatrix[l][colStart]);
            }
            colStart++;
        }
    }

    return result;
}
var matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
  
// var matrix = [ [1,    2,   3,  4,    5],
//                 [6,    7,   8,  9,   10],
//                 [11,  12,  13,  14,  15],
//                 [16,  17,  18,  19,  20] ];
console.log(spiralCopy(matrix));