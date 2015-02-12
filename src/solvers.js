/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme
  var board = new Board(n);

  //generate board with n spaces
  //place n rooks on it
  //test for rooks solution
  //if a solution, assign to solution

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

window.generateBoards = function(n){
  var boards = [];
  board = new Board({'n': n});

  var generate = function(board,piecesPlaced){
    var piecesPlaced = piecesPlaced || 0;
    if ( piecesPlaced === n ){
      console.log('pushed\n' + JSON.stringify(board.rows()));
      //slice this or something
      boards.push(board);
      return;
    }
    //otherwise, toggle a bit

    // iterate over rows
    for( var x = piecesPlaced; x < n; x++ ) {

      // iterate over columns
      for ( var y = piecesPlaced; y < n; y ++ ){
        // console.log(x + ',' + y);
        board.togglePiece(x,y);
        // console.log('flipped a piece at '+ x + ',' + y + '\n' + JSON.stringify(board.rows()));
        piecesPlaced++;
        generate(board, piecesPlaced);
        board.togglePiece(x,y);
        piecesPlaced--;
        // console.log('flipped a piece at '+ x + ',' + y + '\n' + JSON.stringify(board.rows()));
      }

    }
  };

  generate(board);
  console.log(JSON.stringify(boards));
  return boards;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
