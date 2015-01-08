
//
console.log('\n ==== Formatted Table ==== ');

var rowHeights = function(rows) {
	return rows.map(function(row) {
		return row.reduce(function(max, cell) {
			return Math.max(max, cell.minHeight());
		});
	});
};

var colWidths = function(rows) {
	return rows[0].map(function(_, i) {
		return rows.reduce(function(max, row) {
			return Math.max(max, row[i].minWidth());
		});
	});
};

var drawTable = function(rows) {
	var heights = rowHeights(rows);
	var widths = colWidths(rows);

	var drawLine = function (blocks, lineNo) {
		return blocks.map(function(block) {
			return block[lineNo];
		}).join('');
	};

	var drawRow = function(row, rowNum) {
		var blocks = row.map(function(cell, colNum) {
			return cell.draw(widths[colNum], heights[rowNum]);
		});
		return blocks[0].map(function(_, lineNo) {
			return drawLine(blocks, lineNo);
		}).join('\n');
	};
};

var repeat = function(string, times) {
	var result = '';
	for (var i = 0; i < times; i++) {
		result += string;
	}
	return result;
};

var TextCell = function(text) {
	this.text = text.split('\n');
};

TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) {
		return Math.max(width, line.length);
	}, 0);
};

TextCell.prototype.minHeight = function() {
	return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || '';
		result.push(line + repeat('', width - line.length));
	}
	return result;
};

var rows = [];
for (var i = 0; i < 5; i++) {
	var row = [];
	for (var j = 0; j < 5; j++) {
		if ((j + i) % 2 === 0) {
			row.push(new TextCell('##'));
		} else {
			row.push(new TextCell(' '));
		}
	}
	rows.push(row);
}

console.log(' \n ==== VECTOR, 100% ==== ');

var Vector = function(x,y) {
	this.x = x;
	this.y = y;
};

Vector.prototype.plus = function(vec) {
	return new Vector(this.x + vec.x, this.y + vec.y);
};

Vector.prototype.minus = function(vec) {
	return new Vector(this.x - vec.x, this.y - vec.y);
};

Vector.prototype.length = function() {
	return this.x + this.y;
};

console.log(new Vector(1,2).minus(new Vector(1,2)));

console.log(new Vector(1,2).length());


console.log(' \n ==== Another Cell, 0% ==== ');






console.log(' \n ==== Sequence Interface, 0% ==== ');





