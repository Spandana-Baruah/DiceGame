//Detects button pressed

var numberOfRPSButtons = document.querySelectorAll(".gameImage").length;

for (var i = 0; i < numberOfRPSButtons; i++) {
  document.querySelectorAll(".gameImage")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound();
    buttonAnimation(buttonInnerHTML);
    rockPaperScissors(buttonInnerHTML)
  });
}

//Detects keyboard presses

document.addEventListener("keydown", function(event) {
  if ((event.key == 'r') || (event.key == 'p') || (event.key == 's')) {
    makeSound();
    buttonAnimation(event.key);
    rockPaperScissors(event.key);
  }
  else {
    document.querySelector("h1").innerHTML = "Click on the image you want to choose! Or press 'r', 'p', or 's' on your keyboard";
  }
});


function makeSound() {
  var buttonSound = new Audio("sound/button-sound.mp3");
  buttonSound.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}


function rockPaperScissors(value) {
  var number;
  var stringValue = value.toString();

  if (stringValue == 'r') {
    number = 1;
    rps(number);
  }

  if (stringValue == 'p') {
    number = 2;
    rps(number);
  }

  if (stringValue == 's') {
    number = 3;
    rps(number);
  }
}

function rps(myNumber) {

  var randNum = Math.floor(Math.random() * 3) + 1; //returns a random integer between 1 and 3

  if (myNumber === randNum) {
    document.querySelector("h1").innerHTML = "😮 Draw!";
  }
  if ((myNumber === 1) && (randNum === 3)) {
    document.querySelector("h1").innerHTML = "🏆 🎉 You won the match! The computer chose Scissors.. Play again?";
  }
  if ((myNumber === 3) && (randNum === 1)) {
    document.querySelector("h1").innerHTML = "You lost the match! 😔 The computer chose Rock.. Play again?";
  }
  if ((myNumber === 2) && (randNum === 1)) {
    document.querySelector("h1").innerHTML = "🏆 🎉 You won the match! The computer chose Rock.. Play again?";
  }
  if ((nmyNumber === 1) && (randNum === 2)) {
    document.querySelector("h1").innerHTML = "You lost the match! 😔 The computer chose Paper.. Play again?";
  }
  if ((myNumber === 3) && (randNum === 2)) {
    document.querySelector("h1").innerHTML = "🏆 🎉 You won the match! The computer chose Paper.. Play again?";
  }
  if ((myNumber === 2) && (randNum === 3)) {
    document.querySelector("h1").innerHTML = "You lost the match! 😔 The computer chose Scissors.. Play again?";
  }

}
