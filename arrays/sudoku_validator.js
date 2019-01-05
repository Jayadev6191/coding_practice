var board =  [ 
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],        
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 8],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];


function validateRows(board) {
  for (var i = 0; i < board.length; i++) {
    var map = {};
    for (var j = 0; j < board[i].length; j++) {
      // iterate throgh all the columns for each row index
      if (map[board[i][j]]) return false; // Invalid Row
      map[board[i][j]] = true;
    }
  }

  return true;
}

function validateColumns(board) {
  for (var i = 0; i < board.length; i++) {
    var map = {};
    for (var j = 0; j < board.length; j++) {
      // iterate throgh all the rows for each column index
      if(map[board[j][i]]) return false; // Invalid column
      map[board[j][i]] = true;
    }
  }
  return true;
}

function validateSubBoard(board,sbr, sbc) {
  var map = {};
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      if(map[board[i + sbr][j + sbc]]) return false;
      map[board[i + sbr][j + sbc]] = true;
    }
  }
  return true;
}

function validateSubBoards(board) {
  var boardIndices = [0,3,6];

  for(var i = 0; i < boardIndices.length; i++) {
    for(var j = 0; j <  boardIndices.length; j++) {
      if(!validateSubBoard(board, boardIndices[i], boardIndices[j])) return false;
    }
  }

  return true;
}

validateSubBoards(board);

function validateSudoku(board) {
  return validateRows(board) ? (validateColumns(board) ? validateSubBoards(board) : false) : false
}

// trigger validate sudoku through an event handler on the UI

