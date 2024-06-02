










/*-------------------------------- Constants --------------------------------*/

let board =  ['','','',
              '','','',
              '','',''];
let turn = 'X';
let winner = false;
let tie = false;

let player_O = 'o'

const winningCombos = [
  [0,1,2],[0,3,6],[0,4,8],
  [1,4,7],[2,5,8],[3,4,5],
  [6,7,8],[2,4,6]
]

/*---------------------------- Variables (state) ----------------------------*/





/*------------------------ Cached Element References ------------------------*/

const messageEl = document.querySelector('#message')
// console.log(messageEl.textContent)

const squareEls = document.querySelectorAll('.sqr')




/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) => {
  square.addEventListener('click', clickHandle)
})




// create a variable for the parent that has trickle down properties
const ticTacToe = document.querySelector('section')


ticTacToe.addEventListener('click', (event) =>{
  //referring to the board, there is a eventHandler listening for clicks
  //once it registers a click, the below 'event' occurs
  if(event.target.classList.contains('sqr')){
    //if what was clicked has this class....
    //execute the below
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
  } else {
    // the winner statement
  }
}

const updateBoard = () => {

  // loop over board, for each element: 
  //Using the current index of the iteration to access the corresponding square in 'squareEls'
  board.forEach((element, idx) => {
    console.log(idx,element)
    if(element === 'X'){
      squareEls[idx].style.backgroundColor = 'green'
    } else if (element === 'O'){
      squareEls[idx].style.backgroundColor = 'cyan'
    }
  });
}

const init = () => {

// set aside for now

  render()
}

function clickHandle(event){
  console.log('clickd')
  const squareIndex = event.target.id
  placePiece(squareIndex)
}


function placePiece(idx){
  board[idx] = turn
}

function checkForWinner(){
  if(board[0] === board[1] &&
    board[0] === board[2] &&
    board[0] !== ''
  ) {
    winner = true
  }else if(board[3] === board[4] &&
    board[3] === board[5] &&
    board[3] !== ''
  ) {
    winner = true
  }else if(board[6] === board[7] &&
    board[6] === board[8] &&
    board[6] !== ''
  ) {
    winner = true
  }else if(board[0] === board[3] &&
    board[0] === board[6] &&
    board[0] !== ''
  ) {
    winner = true
  }else if(board[0] === board[4] &&
    board[0] === board[8] &&
    board[0] !== ''
  ) {
    winner = true
  }else if(board[1] === board[4] &&
    board[1] === board[7] &&
    board[1] !== ''
  ) {
    winner = true
  }else if(board[2] === board[5] &&
    board[2] === board[8] &&
    board[2] !== ''
  ) {
    winner = true
  }else if(board[2] === board[4] &&
    board[2] === board[6] &&
    board[2] !== ''
  ) {
    winner = true
  }
}




function checkForTie(){
  if(winner === true){
    return
  }else if(board.contains = ''){
    tie === false
  } else {
    tie === true
  }
}

updateMessage()
updateBoard()
// console.log(squareEls[3]);
/*----------------------------- Code -----------------------------*/

init()