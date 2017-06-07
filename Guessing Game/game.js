// create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = (prompt("guess a number"));
var guess = Number(stringGuess);

//check guess

if(guess === secretNumber) {
	alert("you got it right");
}
//otherwise, check if higher
else if(guess > secretNumber) {

	alert("Too high.  Guess again.");
}
//otherwise check if lower

else {
	alert("Too low.  Guess Again.");
}


var count = 1;

while(count < 6) {
	console.log("count is: " + count);
	count++;
}