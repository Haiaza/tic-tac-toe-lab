










/*-------------------------------- Constants --------------------------------*/

let board =  ['X','O','O',
              '','','',
              '','',''];
let turn = 'x';
let winner = false;
let tie = false;

let player_O = 'o'



/*---------------------------- Variables (state) ----------------------------*/





/*------------------------ Cached Element References ------------------------*/

const messageEl = document.querySelector('#message')
// console.log(messageEl.textContent)

const squareEls = document.querySelectorAll('.sqr')




/*----------------------------- Event Listeners -----------------------------*/

// create a variable for the parent that has trickle down properties
const ticTacToe = document.querySelector('section')


ticTacToe.addEventListener('click', (event) =>{
  if(event.target.classList.contains('sqr')){
    console.log(`We clicked ${event.target.id}`)
    // if(event.target.textContent === 'x'){
    //     console.log('Test complete')  Ive tested this and it isnt working thus far
    // }
  }
})





/*-------------------------------- Functions --------------------------------*/
//Upon loading, the game state should be initialized, and a function should be called to render this game state.

const render = () => {

updateBoard();
updateMessage();

}

const updateMessage = () =>{
  if(winner == false&& tie == false){
    console.log(`The game is still in progress`)
  } if (winner == false && tie == true) {
    console.log(`Game over: Tie!`)
  } /*else {
    console.log(`The game is over! The winner is ${}`)
  }*/
}

const updateBoard = () => {

  // loop over board, for each element: 
  //Using the current index of the iteration to access the corresponding square in 'squareEls'
  board.forEach((element, idx) => {
    squareEls[idx].textContent = element
  });
}

const init = () => {

// set aside for now

  render()
}





updateMessage()
// updateBoard()
// console.log(squareEls[3]);
/*----------------------------- Code -----------------------------*/

init()