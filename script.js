const calculatorScreen = document.querySelector('.calculator-screen')
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '';

const updateScreen = (number) => {
	calculatorScreen.value = number;
};

const inputNumber = (number) => {
	if(currentNumber === '0'){
		currentNumber = number;
	}else{
		currentNumber += number;
	}
};

const inputOperator = (operator) => {
	if(calculationOperator === ''){
		prevNumber = currentNumber;
	}
	calculationOperator = operator;
	currentNumber = '';
};

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	});
});

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		inputOperator(event.target.value)
	});
});

equalSign.addEventListener('click', () => {
	calculate();
	updateScreen(currentNumber);
});

const calculate = () => {
	let result = '';
	switch(calculationOperator){
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber);
			break;
		case "-":
			result = prevNumber - currentNumber;
			break;
		case "*":
			result = prevNumber * currentNumber;
			break;
		case "/":
			result = prevNumber / currentNumber;
			break;
		default:
			break;
	}
	currentNumber = result;
	calculationOperator = '';
};

clearBtn.addEventListener('click', () => {
	clearAll();
	updateScreen(currentNumber);
});

const clearAll = () => {
	prevNumber = '';
	calculationOperator = '';
	currentNumber = '0';
	$('[id=info]').val("");
};

decimal.addEventListener('click', () => {
	inputDecimal(event.target.value);
	updateScreen(currentNumber);
});

inputDecimal = (dot) => {
	if(currentNumber.includes('.')){
		return
	}
	currentNumber += dot;
};

$('#percentage').on('click', function(){
  const notif = "Maaf, fungsi persentase belum bisa digunakan sekarang, eheee ;D";
  $('[id=info]').val(notif);
});