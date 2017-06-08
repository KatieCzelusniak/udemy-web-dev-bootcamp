console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");

for(var count = -10; count < 20; count++) {
	console.log(count);
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");

for(var even = 10; even < 41; even +=2) {
	console.log(even);
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");

for(var odd = 301; odd < 334; odd +=2) {
	console.log(odd);
}

console.log("ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");

for(var num = 5; num <=50; num++) {
	if(num % 5 === 0 && num % 3 === 0) {
		console.log(num);
	}
	
}