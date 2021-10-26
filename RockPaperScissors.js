const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock'||userInput==='paper'||userInput==='scissors'||userInput==='bomb'){
    return userInput;
  }else{
    console.log('Invalid input');
  }
} 
const getComputerChoice = ()=>{
  var num = Math.floor(Math.random()*3);
  switch(num){
    case 0:
          return 'rock';
    case 1:
          return 'paper';
    case 2:
          return 'scissors';
   default :
          return 0;                   
  }
} 
function determineWinner(userChoice,computerChoice){
  if (userChoice === 'bomb'){
    return 'You won!'
  }
  if(userChoice == computerChoice){
    return 'It\'s a tie!'
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer won!';
    }else{
       return 'You won!';
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer won!';
    }else{
      return 'You won!'; 
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer won!';
    }else{
      return 'You won!'; 
    }
  }     
}
function playGame(){
  const userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log('You showed ' + userChoice);
  console.log('Computer showed ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice))
}
playGame();