//when user clicks on min or max button, three slots must randomly choose one item out of the five in an array and present it within the dom. if they match, user wins money, if they dont, looser looses money.

//declare variable slot1, 2 and 3 to spin
//variable for amount of money
let totalAmount = 100;
let slot1, slot2, slot3;

//event listener for buttons to follow a function
//one for minimum amount
document.getElementById('minButton').addEventListener('click', function(){
  spinSlots();
//if all slots are equal, user wins money
//conditional compare slots true add money, false take money
  if (compareSpin(slot1, slot2, slot3)) {
    totalAmount +=25;
    document.getElementById('result').innerHTML = `Congrats, you won $250! Your total is now \$${totalAmount}.`;
  }else{
    totalAmount -=1;
    document.getElementById('result').innerHTML = `Shame...you lost $1. Your total is now \$${totalAmount}.`;
  }
});//end of minimum amount event
document.getElementById('maxButton').addEventListener('click', function(){
  spinSlots();
  if ( compareSpin(slot1, slot2, slot3)) {
    totalAmount +=250;
    document.getElementById('result').innerHTML = `Congrats, you won $250! Your total is now \$${totalAmount}.`;
  }else{
    totalAmount -=25;
    document.getElementById('result').innerHTML = `Shame...you lost $25. Your total is now \$${totalAmount}.`;
  }
});//end of maximum amount event

function spinSlots(){
  /* when items in array are picked, in the dom i want them to slowly roll in */
  slot1 = spinRandom();
  slot2 = spinRandom();
  slot3 = spinRandom();
  document.getElementById('lk1').innerHTML = slot1;
  document.getElementById('lk2').innerHTML = slot2;
  document.getElementById('lk3').innerHTML = slot3;

}
//function for selecting random item in slots
function spinRandom(){
  //change strings into pictures
  const animals = ['simba', 'mufasa', 'nala', 'scar', 'rafiki', 'timon', 'pumbaa'];
  let reelRoll = animals[Math.floor(Math.random()*animals.length)]; //floor(random)*index to randomly select an item off an array
  //return random item picked to variable's values
  return reelRoll;
}

//function for comparing slot values
function compareSpin(slot1, slot2, slot3){
  if(slot1 === slot2 && slot1 === slot3){
    return true;
  }else{
    return false;
  }
}

//old psuedo and code

//function to compare values in array
//declare a variable for boolean variable to be true
//if statement all slots are equal then boolean value is false
//else boolean value is true
//return boolean variable

// //function to control score for min bets
// function minBet(){
//   //min button value is 25
//   totalAmount -=25;
//   //run random index function
//   spinRandom();
//   //
//   if(unoVal=== dosVal=== tres Val){
//     totalAmount +=50;
//     document.getElementById('id').innerHTML = `Congrats, you won $25! Your total is now \$${totalAmount}.`;
//   }else{
//     document.getElementById('id').innerHTML = `Oh no, you lost $25...your total is now \$${totalAmount}.`;
//   }
// }
//
// //function to control score for max bets
// function maxBet(){
//   //max button value is 250
//   totalAmount -=25;
//   //run random index function
//   spinRandom();
//
//   if (unoVal === dosVal === tresVal) {
//     totalAmount +=250;
//     document.getElementById('id').innerHTML = `Congrats, you won $250! Your total is now \$${totalAmount}.`;
//   }else{
//     document.getElementById('id').innerHTML = `Oh no, you lost $25...your total is now \$${totalAmount}.`;
//   }
// }
