"use strict";

// Get all the keys from document
var keys = document.querySelectorAll('.keys span');
var operators = ['+', '-', '*', '/'];
var decimalAdded = false;

function solve(inputVal) {
	/*var lastChar = inputVal[inputVal.length - 1];
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.') {
				inputVal = inputVal.replace(/.$/, '');
			}*/
			if(validate()) {
				document.getElementById("screen").value = eval(inputVal);
			} else {
				document.getElementById("screen").value = "invalid input data!";
			}
	
}

function validate(){

    var  inputVal = document.getElementById("screen").value;

    try{
        inputVal = eval(inputVal);
        document.getElementById("screen").value=inputVal;
        return true;
    }
    catch(e) {
		return false;
    }

}

document.getElementById("backspace").onclick = function(){
	document.getElementById("screen").value = document.getElementById("screen").value.slice(0,-1);

};

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function() {
		// Get the input and button values
		var input = document.getElementById("screen");
		var inputVal = input.value;
		var btnVal = this.innerHTML;
		
		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		// If clear key is pressed, erase everything
		if(btnVal == 'C') {
			input.value = '';
			//decimalAdded = false;
		}
		
		// If eval key is pressed, calculate and display the result
		else if(btnVal == '=') { solve(inputVal); }
			/*//var equation = inputVal;
			var lastChar = inputVal[inputVal.length - 1];
			
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				inputVal = inputVal.replace(/.$/, '');
			
			if(inputVal)
				input.value = eval(inputVal);
				
			decimalAdded = false;
		}*/
		
		// Basic functionality of the calculator is complete. But there are some problems like 
		// 1. No two operators should be added consecutively.
		// 2. The equation shouldn't start from an operator except minus
		// 3. not more than 1 decimal should be there in a number
		
		// We'll fix these issues using some simple checks
		
		// indexOf works only in IE9+
		/*else if(operators.indexOf(btnVal) > -1) {
			// Operator is clicked
			// Get the last character from the equation
			var lastChar = inputVal[inputVal.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.value += btnVal;
			
			// Allow minus if the string is empty
			else if(inputVal == '' && btnVal == '-') 
				input.value += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				input.value = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		// Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.value += btnVal;
				decimalAdded = true;
			}
		}
		
		// if any other key is pressed, just append it*/
		else {
			input.value += btnVal;
		}
		
		// prevent page jumps
		//e.preventDefault();
	} 
}

//screen.addEventListener ('click', function 

document.querySelector('input').addEventListener('keydown', function(e) {
		var inputVal = document.getElementById("screen").value;
			if (e.keyCode === 13 && inputVal !== null) {
				solve(inputVal);
			}
			else if (e.keyCode === 27) {
				document.getElementById("screen").value = '';
			} 
                
});	