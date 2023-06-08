// Select the dice image elements and the roll button
var diceImage1 = document.getElementById("dice-image1");
var diceImage2 = document.getElementById("dice-image2");
var rollButton = document.getElementById("roll-button");

// Add a click event listener to the roll button
rollButton.addEventListener("click", rollDice);

// Function to roll the dice
function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage1 = "dice" + randomNumber1 + ".png";
  var randomDiceImage2 = "dice" + randomNumber2 + ".png";
  var randomImageSource1 = "images/" + randomDiceImage1;
  var randomImageSource2 = "images/" + randomDiceImage2;

  // Update the dice image sources
  diceImage1.src = randomImageSource1;
  diceImage2.src = randomImageSource2;

  // Play audio based on the game result
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "❤️Player 1 Wins!";
    playSound("winning.mp3");
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!⭐ ";
    playSound("winning.mp3");
  } else {
    document.querySelector("h1").innerHTML = "Tie, Try Again!⚔️";
    playSound("losing.mp3");
  }
}

// Function to play audio based on the audio file name
function playSound(soundFile) {
  var audio = new Audio("audio/" + soundFile); // Replace "audio/" with the actual path to your audio files
  audio.play();
}
