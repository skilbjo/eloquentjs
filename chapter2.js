// Print a Triangle
console.log('=== Triangle ===\n');

var result = "";

var loopTriange = function(str) {
	for (var i = 1; i <= 7; i++) {
		str = str + '#';
		console.log(str);
	}
};

loopTriange(result);

// Classic FizzBuzz
console.log('=== FizzBuzz ===\n');

var FizzBuzz = function () {
	for (var i = 1; i <= 100; i++) {
		if ( (i % 3 === 0) && (i % 5 === 0) ) {
			console.log('fizzbuzz');
		} else if (i % 3 === 0) {
			console.log('fizz');
		} else if (i % 5 === 0) {
			console.log('buzz');
		} else {
			console.log(i);
		}
	}
};

FizzBuzz();

// Print a Chess board
console.log('=== Chess Board ===\n');

var chessBoard = function(size) {
	var horizontal = size;
	var vertical = size;

	while (vertical > 0) {
		var line = '# ';
		for (var i = 1; i <= horizontal; i++) {
			line = line + '# ';
		}
		console.log(line);
		vertical--;
	}
};

chessBoard(5);