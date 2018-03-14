var Game = require('./game');
var prompt = require('prompt');


function askMove(theGame) {
     // Ask for name until user inputs "done"
      prompt.get(['rowIndex', 'columnIndex'], function(err, result) {

       console.log('Choose row: ' + result.rowIndex);
       console.log('Choose column: ' + result.columnIndex);

       theGame.playMove(result.rowIndex, result.columnIndex);

       if (theGame._state != 'finished') {

        askMove(theGame);
       } else {

        return prompt.stop();
       }

  });
 }

 prompt.start();

 prompt.get(['rows', 'columns', 'bombs'], function (err, result) {
   //
   // Log the results.
   //
   var Game = require('./game');
   console.log('Choose rows, columns and bombs:');
   console.log('How many rows: ' + result.rows);
   console.log('How many columns: ' + result.columns);
   console.log('How many bombs: ' + result.bombs);
   console.log(result.rows, result.columns, result.bombs);
    let game = new Game(result.rows, result.columns, result.bombs);
   game._board.print();
   askMove(game);

 });
