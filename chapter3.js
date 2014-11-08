// Minimum
console.log('\n=== Minimum ===');

var min = function(value1, value2) {
	return Math.min(value1, value2);
};

console.log(min(3,6));

// Recursion
console.log('=== Recursion ===');

var isEven = function(number) {
	if (Math.abs(number) === 0) {
		return true;
	} else if (Math.abs(number) === 1) {
		return false;
	} else
		return isEven(Math.abs(number) - 2);
};

console.log(isEven(-2));

// Bean Counting
console.log('\n=== Bean Counting ===');

console.log('== Count B\'s ==');

var countBs = function(str) {
	var sum = 0;
	for (var i = 0; i <= str.length; i++) {
		if (str.charAt(i) === 'B') sum += 1;
	}
	return sum;
};

console.log(countBs('BBcB'));

console.log('\n== Count Char ==');

var countChar = function(str, char) {
	var sum = 0;
	for (var i = 0; i <= str.length; i++) {
		if (str.charAt(i) === char) sum += 1;
	}
	return sum;
};

console.log(countChar('BBcB', 'c'));

