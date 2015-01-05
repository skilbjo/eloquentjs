// Sum of a Range
console.log('\n=== Sum of a Range ====');

var range = function(start, end) {
	var result = [];
	for (var i = start; i <= end; i++) {
		result.push(i);
	}
	return result;
};

console.log(range(1,10));

var sum = function(arr) {
	var result = 0;
	arr.map( function(item) {
		return result += item;
	});
	return result;
};

console.log('\n', sum(range(1,10)));

// Reversing an Array
console.log('\n==== Reversing an Array ===');

var things = [1,2,3];

var reverseArray = function(arr) {
	var result = [];
	arr.map( function(item) {
		result.unshift(item);
	});
	return result;
};

console.log(reverseArray(things));

// A List
console.log('\n==== a List ===');
console.log('status = 50%');

var arrayToList = function(arr) {
	var list = {};

	arr.map(function(i) {
		list.value = i;
		arr.shift();
		list.rest = arrayToList(arr);
	});

	return list;
};

console.log(arrayToList(things));

var list = { value: 1, rest: { value: 2, rest: { value: 3, rest: {} } } };

var prepend = function(element, list) {

};

var listToArray = function(list) {
	return list;
};

console.log(listToArray(list));

// Deep Comparison
console.log('\n==== Deep Comparison ===');
console.log('status = 50%');

var deepEqual = function (first, second) {
	if ( (typeof first) === (typeof second) ) {
		if (first === second) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};

console.log(deepEqual( { 'hi': 'hi' }  , { 'hi': 'hi' }  ));


