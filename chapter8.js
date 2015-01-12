var lolwut = function() {
	var x = true * 'monkey';
	return x;
};

console.log(' ==== Retry ==== ');

var MultiplicatorUnitFailure = function(msg) {
	this.message = message;
	this.stack = (new Error()).stack;
};

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = 'MultiplicationUnitFailure';


var primitiveMultiply = function(err) {
	var successPropability = Math.random();
	var flag = false;

	if (successPropability >= 0.5) {
		flag = true;
	}

	try {
		if (flag) {
			console.log( 5 * 5);
			return;
		}
		throw new Error(MultiplicatorUnitFailure);
	} catch (e) {
		if (e instanceof MultiplicatorUnitFailure) {
		console.log('error, got: ', e, successPropability);
		} else {
			throw e;
		}
	}
};

primitiveMultiply();


