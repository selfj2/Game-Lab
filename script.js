function startGame(){
  const start = prompt('Do you want to play?')
  if(start === 'Yes' || 'yes' || 'y'){
   const playerName = prompt('Please enter your name!');
    startCombat(playerName);
    }else{
      console.log("ok")
    }
  }
     
  function startCombat(playerName){
        let lives = 0;
        let playerHealth = 40;
        let grantHealth = 10;
  
  while (playerHealth > 0 && lives < 3) {
      const Combat = prompt('Attack or Quit');
      if (Combat === 'Attack'){
        grantHealth -= getDamage();
        playerHealth -= getDamage();
      console.log(`Grant has ${grantHealth}`);
      console.log(`${playerName} has ${playerHealth}`);} 
      else{
        break
      }
  
     if (grantHealth <= 0) {
      lives++;
      grantHealth = 10;
      console.log("PLAYER WINS")
    }else if (playerHealth <=0){
        console.log('GRANT Wins!!!!')
     }
    
  } 
      }
  
  function getDamage(){
       return Math.floor(Math.random() * 5) + 1;
  }
  
  startGame();


// function startGame(){
//   const start = prompt('Do you want to play?')
//   if(start === 'Yes' || 'yes' || 'y'){
//    const playerName = prompt('Please enter your name!');
//   startCombat(playerName);
//     }
//   }
  
//   startGame();
//   // let playerName = 'Joel'; //prompt('Please enter your name!');
  
//   //  change A to Attack and Q to Quit Before turning it in 
  
//   function startCombat(){
//     const Combat = prompt('A or Q');
  
//       if (Combat === 'A'){
//         let lives = 0;
//   let playerHealth = 40;
//   let userHealth = 10;
  
//   while (playerHealth > 0 && lives < 3) {
//   // userHealth -= Math.floor((Math.random() * 5) + 1);
//   //   playerHealth -= Math.floor((Math.random() * 5) + 1);
//   getDamage();
//       console.log(`Grant has ${userHealth}`);
//     console.log(`${playerName} has ${playerHealth}`);
  
//      if (userHealth <= 0) {
//       lives++;
//       userHealth = 10;
//       console.log("PLAYER WINS")
//     }else if (playerHealth <=0){
//         console.log('GRANT Wins!!!!')
//      }
    
//   } 
//       }
//       function getDamage(){
//    userHealth -= Math.floor(Math.random() * 5) + 1;
   
//    playerHealth -= Math.floor(Math.random() * 5) + 1;
//   }
  
//   }
  
//   console.log(startCombat());




// const start = prompt('Do you want to play?')
// if(start === 'Yes' || 'yes'){
// //    const playerName = prompt('Please enter your name!')
// }else{
//     console.log(null)
// }


// let playerName = prompt('Please enter your name!')

// let lives = 0;
// let playerHealth = 40;
// let userHealth = 10;


// while (playerHealth > 0 && lives < 3) {
// userHealth -= Math.floor((Math.random() * 2) + 1);
//   playerHealth -= Math.floor((Math.random() * 2) + 1);
//     console.log(`Grant has ${userHealth}`);
//   console.log(`${playerName} has ${playerHealth}`)
  
  
//    if (userHealth <= 0) {
//     lives++;
//     userHealth = 10;
//     console.log("PLAYER WINS")
//   }else if (playerHealth <=0){
//       console.log('GRANT Wins!!!!')
//    }
  
// }



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

















