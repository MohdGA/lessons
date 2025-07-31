/*--------------------- Constants ---------------------*/
const choice = ['rock', 'paper', 'scissors'];


/*------------------- Variables --------------------*/
let msg;
let playerChoice;
let computerChoice;


/*------------ Cached Element References -------------*/
const rockEle = document.querySelector('#rock');
const paperEle = document.querySelector('#paper');
const scissorEle = document.querySelector("#scissors");
const resultDisplayEle = document.querySelector('#result-display');
const resetBtnEle = document.querySelector('#resetBtn');


/*----------------- Functions -----------------*/



const getComputerChoice = () => {
  // generate random number 0 To 2 becuase we use array
  const randomIndex = Math.floor(Math.random() * choice.length); 
  // select the item from the array
  computerChoice = choice[randomIndex];
};

// initialize game state
function play(event) {
  getComputerChoice();
  playerChoice = event.target.id;
  // after updating state, render to html
  compare();
  render();
};

function compare(){
  if(playerChoice == choice[0] && computerChoice == choice[2] || playerChoice == choice[2] && computerChoice == choice[1] || playerChoice == choice[1] && computerChoice == choice[0]){
    msg = "player wins!";
  }else if(playerChoice === computerChoice){
    msg = "Result:Tie!"
  }else{
    msg = "Computer wins!";
  };
};

function Reset(){
  resultDisplayEle.textContent = "";
};

// updates our UI/html directly
const render = () => {
  resultDisplayEle.textContent = `Computer choice is ${computerChoice} and player choice is ${playerChoice} ${msg}`;
};





/*--------------- Event Listeners ----------------*/
rockEle.addEventListener('click', play);
paperEle.addEventListener('click', play);
scissorEle.addEventListener('click', play);
resetBtnEle.addEventListener('click',Reset);
