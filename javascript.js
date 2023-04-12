
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display-screen');
let firstNum = '';
let secondNum = '';
let operator = '';
let result = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('operator')) {
      operator = button.value;
      firstNum = display.value;
      display.value = '';
    } else if (button.classList.contains('equal')) {
      secondNum = display.value;
      result = calculate(firstNum, operator, secondNum);
      display.value = result;
    } else if (button.classList.contains('clear')) {
      firstNum = '';
      secondNum = '';
      operator = '';
      display.value = '';
    } else {
      display.value += button.value;
    }
  });
});

function calculate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}
