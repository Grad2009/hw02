"use strict";

var keys = document.querySelectorAll('span.btn');
var input = document.getElementById("screen");
var backspace = document.getElementById("backspace");
var clear = document.getElementById("clear");
var sqrt = document.getElementById("sqrt");
var error = false;

function solve(inputVal) {
	if(validateInput()) {
		document.getElementById("screen").value = eval(inputVal);
		} else {
			document.getElementById("screen").value = "invalid input data!";
		}
}

function validateInput(){          // check if eval can solve
	var  inputVal = input.value;

    try{
        inputVal = eval(inputVal);
        return true;
    }
	
    catch(e) {
		error = true;
		return false;
    }

}

sqrt.onclick = function () {
	if(validateInput()) {
		document.getElementById("screen").value = Math.sqrt( eval(document.getElementById("screen").value));
		} else {
		document.getElementById("screen").value = "invalid input data!";
		}
}

backspace.onclick = function(){
	input.value = input.value.slice(0,-1);
};

clear.onclick = function(){
	document.getElementById("screen").value = '';
	error = false;
};

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function() {
		var inputVal = input.value;
		var btnVal = this.innerHTML;
		
		if(btnVal === '=') { solve(inputVal); }
			
		else {
			error === false ? input.value += btnVal : input.value='';	//if error - erase screen
			error = false;  												// reset error flag
		}
	} 
}

document.querySelector('input').addEventListener('keydown', function(e) {
		var inputVal = input.value;
			if (e.keyCode === 13 && inputVal !== null) {
				solve(inputVal);
			}
			else if (e.keyCode === 27) {
				document.getElementById("screen").value = '';
			} 
                
});	