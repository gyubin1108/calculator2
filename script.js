const result = document.getElementById('result');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const subtract = document.getElementById('subtract');
const add = document.getElementById('add');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');   
const buttons = document.querySelectorAll('.buttons button');

let currentNum = '';
let prevNum = '';
let operation = null;

// function to append number to current number
function appendNum(num) {
if (num === '.' && currentNum.includes('.')) return;
currentNum += num.toString();
updateDisplay();
}

// function to update display with current number
function updateDisplay() {
result.value = currentNum;
}

// function to clear the calculator
function clearAll() {
currentNum = '';
prevNum = '';
operation = null;
updateDisplay();
}

// function to delete last digit of current number
function deleteNum() {
currentNum = currentNum.slice(0, -1);
updateDisplay();
}

// function to perform operation
function operate(op) {
if (currentNum === '') return;
if (prevNum !== '') {
calculate();
}
operation = op;
prevNum = currentNum;
currentNum = '';
}

// function to calculate result
function calculate() {
let resultNum;
const num1 = parseFloat(prevNum);
const num2 = parseFloat(currentNum);
if (isNaN(num1) || isNaN(num2)) return;
switch (operation) {
case '+':
resultNum = num1 + num2;
break;
case '-':
resultNum = num1 - num2;
break;
case '×':
resultNum = num1 * num2;
break;
case '÷':
if (num2 === 0) {
alert('Cannot divide by 0');
clearAll();
return;
}
resultNum = num1 / num2;
break;
default:
return;
}
currentNum = resultNum.toString();
operation = null;
prevNum = '';
updateDisplay();
}

// add event listeners to buttons
buttons.forEach((button) => {
button.addEventListener('click', () => {
if (button.id === 'clear') {
clearAll();
} else if (button.id === 'backspace') {
deleteNum();
} else if (button.id === 'equals') {
calculate();
} else if (
button.id === 'add' ||
button.id === 'subtract' ||
button.id === 'multiply' ||
button.id === 'divide'
) {
operate(button.id);
} else {
appendNum(button.textContent);
}
});
});

// add keyboard support
document.addEventListener('keydown', (e) => {
if (e.key >= 0 && e.key <= 9) {
appendNum(e.key);
} else if (e.key === '.') {
appendNum('.');
} else if (e.key === '+' || e.key === '-' || e.key === '' || e.key === '/') {
operate(e.key === '' ? '×' : e.key === '/' ? '÷' : e.key);
} else if (e.key === 'Enter' || e.key === '=') {
calculate();
} else if (e.key === 'Backspace') {
deleteNum();
} else if (e.key === 'Escape') {
clearAll();
}
});
