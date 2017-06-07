console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
var num = -10;

while(num <= 19) {
	console.log(num);
	num++;
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");

var value = 10;

while(value <= 40) {
	console.log(value);
	value +=2;
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");

var odds = 301;

while(odds <= 333) {
	console.log(odds);
	odds +=2 ;
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");

var startValue = 5;

while(startValue <= 50) {
	
	if(startValue % 5 === 0 && startValue % 3 === 0)

	console.log(startValue);
	startValue++;
}