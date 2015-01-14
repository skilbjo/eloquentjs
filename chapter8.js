var lolwut = function() {
	var x = true * 'monkey';
	return x;
};

console.log(' ==== Retry ==== 80% ');

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
			console.log( Math.random() * Math.random());
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

// primitiveMultiply();


console.log(' === Locked Box === ');

var box = {
	locked: true,
	unlock: function() { this.locked = false; },
	lock: function() { this.locked = true; },
	_content: [],
	get content() {
		if (this.locked) throw new Error('It`s locked!');
		return this._content;
	}
};

var withBoxUnlocked = function(box) {

	try {
		box.unlock();		
	} finally {
		return box.locked;
	}

};

console.log(box.content());

// console.log( withBoxUnlocked(box));



