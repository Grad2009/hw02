
/*describe("solve", function() {
	before(function() {
		document.getElementById('screen').value='5+6';
	});
		it("если корректные входные данные", function() {
	    	{
					assert.equal(document.getElementById('screen').value, true);
				}
		  	});
			
		it("возвращает вычисленное выражение", function() {
	    	{
					assert.equal(document.getElementById('screen').value, 11);
				}
		  	});	
	});

describe("validate", function() {
	before(function() {
		document.getElementById('screen').value='error';
	});
		it("если корректные входные данные возвращает true, иначе false", function() {
	    	{
					assert.equal(document.getElementById('screen').value, false);
				}
		  	});
	});*/

describe ("SQRT Button", function() {
	before(function() {
		document.getElementById('screen').value='9';
		document.getElementById('sqrt').click();
	});
		it("если корректные входные данные возвращает sqrt(), иначе 'invalid input data'", function() {
	    	{
					assert.equal(document.getElementById('screen').value, 3);
				}
		  	});
	});

describe ("Backspace Button", function() {
	before(function() {
		document.getElementById('screen').value='123';
		document.getElementById('backspace').click();
	});
		it("должен удалить последний введенный символ", function() {
	    	{
					assert.equal(document.getElementById('screen').value, 12);
				}
		  	});
	});	

describe ("Clear Button", function() {
	before(function() {
		document.getElementById('screen').value='123';
		document.getElementById('clear').click();
	});
		it("должен очистить экран", function() {
	    	{
					assert.equal(document.getElementById('screen').value, '');
				}
		  	});
	});	