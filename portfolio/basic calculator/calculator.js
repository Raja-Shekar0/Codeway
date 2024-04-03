const clear = document.getElementById("clear");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const result = document.getElementById("result");
const operator = document.getElementById("operator");

let currentOperand = "";
let previousOperand = "";
let operation = null;

// Handles displaying user input
const inputNumber = (number) => {
	if (number === "." && currentOperand.includes(".")) return;
	currentOperand = currentOperand.toString() + number.toString();
	result.textContent = currentOperand;
}

// Sets up calculator to handle operations
const handleOperation = (op) => {
	if (currentOperand === "") return;
	if (previousOperand !== "") calculate();
	operation = op;
	operator.textContent = operation;
	previousOperand = currentOperand;
	currentOperand = "";
}

// Calculates user input
const calculate = () => {
	let computation;
	const prev = parseFloat(previousOperand);
	const current = parseFloat(currentOperand);
	if (isNaN(prev) || isNaN(current)) return;
	switch(operation) {
		case "+":
			computation= prev + current;
			break;
		case "-":
			computation = prev - current;
			break;
		case "*":
			computation = prev * current;
			break;
		case "/":
			computation = prev / current;
			break;
		default:
			return;
	}
	currentOperand = computation;
	operator.textContent = "";
	result.textContent = computation;
	previousOperand = "";
}

// Resets calculator
const clearAll = () => {
	currentOperand = "";
	previousOperand = "";
	result.textContent = "";
	operator.textContent = "";
}

// Adds event listeners to buttons
clear.addEventListener("click", clearAll);
divide.addEventListener("click", () => handleOperation("/"));
multiply.addEventListener("click", () => handleOperation("*"));
subtract.addEventListener("click", () => handleOperation("-"));
add.addEventListener("click", () => handleOperation("+"));
equals.addEventListener("click", calculate);
zero.addEventListener("click", () => inputNumber(0));
one.addEventListener("click", () => inputNumber(1));
two.addEventListener("click", () => inputNumber(2));
three.addEventListener("click", () => inputNumber(3));
four.addEventListener("click", () => inputNumber(4));
five.addEventListener("click", () => inputNumber(5));
six.addEventListener("click", () => inputNumber(6));
seven.addEventListener("click", () => inputNumber(7));
eight.addEventListener("click", () => inputNumber(8));
nine.addEventListener("click", () => inputNumber(9));
decimal.addEventListener("click", () => inputNumber("."));