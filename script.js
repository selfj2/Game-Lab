const start = prompt('Do you want to play?')
if(start === 'Yes' || 'yes'){
//    const playerName = prompt('Please enter your name!')
}else{
    console.log(null)
}


let playerName = 'Joel'; //prompt('Please enter your name!')

let lives = 0;
let playerHealth = 40;
let userHealth = 10;


while (playerHealth > 0 && lives < 3) {
userHealth -= Math.floor((Math.random() * 2) + 1);
  playerHealth -= Math.floor((Math.random() * 2) + 1);
    console.log(`Grant has ${userHealth}`);
  console.log(`${playerName} has ${playerHealth}`)
  
  
   if (userHealth <= 0) {
    lives++;
    userHealth = 10;
    console.log("PLAYER WINS")
  }else if (playerHealth <=0){
      console.log('GRANT Wins!!!!')
   }
  
}



// let playerName = prompt('Please enter your name!')

// let lives = 3;
// let playerHealth = 40;
// let userHealth = 10;


// function hitComputer(){
//   userHealth -= (Math.floor(Math.random() * 3)+ 1);
//   console.log(`The mighty Grant has ${userHealth} points left`);
//   if (userHealth <=  0){
//     lives--;
//     userHealth = 10;
//   }
//   if (lives <= 0){
//     console.log(`${playerName} Wins` )
//   }
// }
// function hitPlayer(){
//   playerHealth -= (Math.floor(Math.random() *3)+1);
//   console.log(`${playerName} has ${playerHealth} left`)
//   if(playerHealth <= 0){

//   }
//   if(playerHealth === 0){
//     console.log('The mighty Grant Wins!!!!')
//   }
  
// }

// while (lives > 0){
//   hitComputer();
//   hitPlayer();

// }















