










/*-------------------------------- Constants --------------------------------*/

let board = ['','','','','','','','',''];
let turn = 'x';
let winner = false;
let tie = false;




/*---------------------------- Variables (state) ----------------------------*/






/*------------------------ Cached Element References ------------------------*/

messageEl = document.querySelector('#message')
// console.log(messageEl.textContent)

const squareEls = document.querySelectorAll('.sqr')








/*-------------------------------- Functions --------------------------------*/
//Upon loading, the game state should be initialized, and a function should be called to render this game state.

const render = () => {

//set aside for now


}


const init = () => {

// set aside for now

  render()
}


const updateBoard = () => {

  // loop over board, for each element: 
  //Using the current index of the iteration to access the corresponding square in 'squareEls'
  board.forEach((square, idx) => {
    if (square) {
      squareEls[idx].style.backgroundColor = 'blue';

    }
  });
}



updateBoard()

/*----------------------------- Event Listeners -----------------------------*/










/*----------------------------- Code -----------------------------*/

init()