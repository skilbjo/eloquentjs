console.log(' === Modules === ');

console.log('\n === Month Names === ');


var weekDay = function() {
	var names = ['Sunday','Monday','Tuesday',
		'Wednesday','Thursday','Friday','Saturday'];
  return {
    name: function(number) { return names[number]; },
    number: function(name) { return names.indexOf(name); }
  };
}(); 

var monthNames = function() {
	var names = ['January','February','March',
		'April','May','June',
		'July','August','September',
		'October','November','December'];
  return {
    name: function(number) { return names[number]; },
    number: function(name) { return names.indexOf(name); }
  };
}(); 

console.log(monthNames.name(monthNames.number('December')));

console.log('\n === Return to Electronic Life, 0% ===');
