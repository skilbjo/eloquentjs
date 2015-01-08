(function(_, g, u) {
  typeOf = function(o) {
    return o === g
      ? "global"
      : o == u
        ? o === u
          ? "undefined"
          : "null"
        : _.toString.call(o).slice(8, -1);
  };
})({}, this);

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

var average = function(arr) {
	function plus(a,b) { return a+b; }
	return arr.reduce(plus) / arr.length;
};

var byName = {};
ancestry.forEach(function(p) {
	byName[p.name] = p;
});




var hasKnownMother = ancestry.filter(function(person) {
	if (person.mother !== null) return person.mother;
});

var mother = {};
hasKnownMother.forEach(function(person) {
	mother[person.mother] =  person.mother;
});

console.log(mother);


// Historical Life Expectancy
console.log('\n==== Historical Life Expectancy, 0% ===');

var eachAge = {};
ancestry.forEach(function(p) {
	eachAge[p.name] = { age: p.died - p.born, mother: p.mother };
});

// console.log(eachAge);

// Every and then Some
console.log('\n==== Every and then some 100% ===');


var every = function(arr, predicate) {
	var result = true;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] !== predicate) {
			result = false; break;
		}
	}

	return result;
};

var some = function(arr, predicate) {
	var result = false;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === predicate) {
			result = true; break;
		}
	}

	return result;
};

console.log(every([1,1,1],1)); // true
console.log(every([1,2,1],1)); // false

console.log(some([1,2,1],1)); // true
console.log(some([1,2,1],3)); // false
