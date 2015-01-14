console.log(' === RegEx Golf, 100% === ');

var re1 = /ca\w/
	, re2 	= /pr?op/
	, re3 = /ferr\w*/
	, re4 = /\w*ious/
	, re5 = /\s/
	, re6 = /\w{6}/
	, re7 = /[^e]+/
	;

// car and cat
console.log('1:', 
	re1.test('cat'), re1.test('car')
	);

// pop and prop
console.log('2:', 
	re2.test('pop'), re2.test('prop')
	);

// ferret, ferry, and ferrari
console.log('3:',
	re3.test('ferret'), re3.test('ferry'), re3.test('ferrari')
	);

// Any word ending in ious
console.log('4:',
	re4.test('porious'), re4.test('capricious'), re4.test('hello')
	);

// A whitespace character followed by a dot, comma, colon, or semicolon
console.log('5:',
	re5.test(' .'), re5.test(' ,'), re5.test(' ;'), re5.test('hello,')
	);

// A word longer than six letters
console.log('6:',
	re6.test('morethansixcharacters'), re6.test('fewer')
	);

// A word without the letter e”
console.log('7:',
	re7.test('hi'), re7.test('hello')
	);


console.log('\n === QUOTING STYLE, 100% === ');

var paragraph = "Dear 'Blah', \nI am 'writing' to inform you of nothing. \nThank you for your 'time' \nYour 'friend', \nJohn";

console.log(paragraph.replace(/\'/g,'"'));


console.log('\n ==== Numbers Again, 10% ==== ');

var n1 = /\d+/;

console.log(n1.test(123));






