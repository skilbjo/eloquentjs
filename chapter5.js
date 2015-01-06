// Flattening
console.log('\n=== Flattening ====');

var arr = [ [1,2,3], [4,5,6] ];

var reduce = function(arr) {
	var result = [];

	for (var i = 0; i < arr.length; i++) {
		result = result.concat(arr[i]);
	}

	return result;

};

console.log('\n', reduce(arr));

// Mother-Child Age Difference
console.log('\n==== Mother-Child Age Difference, 20% ===');
ancestry = JSON.parse(require('./ancestry'));

var getMothers = function(arr) {
	var result = [];
	arr.forEach(function(i) { 
		Object.keys(i).forEach(function(key) {
			var val = i[key];
			if (key === 'mother') {
				result.push(val);
			}
		});
	});
	return result;
};
var mothers = getMothers(ancestry);




// Historical Life Expectancy
console.log('\n==== Historical Life Expectancy ===');


// Every and then Some
console.log('\n==== Every and then some ===');

