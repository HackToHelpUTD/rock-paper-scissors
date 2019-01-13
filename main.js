function pickChoice(element) {
  var userChoice = element.firstElementChild.src;
  var humanBox = document.getElementsByClassName("human")[0].firstElementChild;
  
  humanBox.src = userChoice;

  var uChoice = element.firstElementChild.alt;
  var cChoice = CPUchoice();

  showResults(cChoice, uChoice);
}

function CPUchoice() {
  var options = ["rock", "paper", "scissors"];
  var CPUbox = document.getElementsByClassName("cpu")[0].firstElementChild;
  var choice = options[randomNumberGenerator()];

  CPUbox.src = "imgs/" + choice  + ".svg";
  return choice;
}

function randomNumberGenerator() {
  var random = Math.round( Math.random() * 2);

  return random;
}

function showResults(CPUchoice, userChoice) {
  var resultsBox = document.getElementsByClassName("results")[0].firstElementChild;

  if (CPUchoice == userChoice) {
    resultsBox.innerHTML = "It's a draw.";
  } else if (CPUchoice == "rock" && userChoice == "scissors" || CPUchoice == "paper" && userChoice == "rock" || CPUchoice == "scissors" && userChoice == "paper") {
    resultsBox.innerHTML = "You lost.";
  } else {
    resultsBox.innerHTML = "You win!";
  }
}