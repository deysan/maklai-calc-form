const numberOne = document.querySelector('#number-1');
const numberTwo = document.querySelector('#number-2');
const operator = document.querySelector('#operator');
const result = document.querySelector('.result');
const button = document.querySelector('.button');
const buttonReset = document.querySelector('.button-reset');

let numberOneValue = '';
let numberTwoValue = '';
let operatorValue = '+';

numberOne.addEventListener('input', (event) => {
  event.preventDefault();
  const { value } = event.target;
  if (!value || value.length === 0) {
    return errorView();
  }
  return (numberOneValue = Number(value));
});

numberTwo.addEventListener('input', (event) => {
  event.preventDefault();
  const { value } = event.target;
  if (!value || value.length === 0) {
    return errorView();
  }
  return (numberTwoValue = Number(value));
});

operator.addEventListener('change', (event) => {
  event.preventDefault();
  const { value } = event.target;
  return (operatorValue = value);
});

button.addEventListener('click', (event) => {
  event.preventDefault();
  if (
    numberOneValue !== '' &&
    numberTwoValue !== '' &&
    numberOne.value.length !== 0 &&
    numberTwo.value.length !== 0
  ) {
    if (document.querySelector('.form-error')) {
      document.querySelector('.form-error').remove();
    }
    result.textContent = calc(numberOneValue, numberTwoValue, operatorValue);
  } else {
    errorView();
  }
});

buttonReset.addEventListener('click', (event) => {
  event.preventDefault();
  reset();
});

function errorView() {
  if (numberOneValue === '' && numberOne.value.length === 0) {
    numberOne.setCustomValidity('Введіть число без пробілів!');
    numberOne.reportValidity();
  } else if (numberTwoValue === '' && numberTwo.value.length === 0) {
    numberTwo.setCustomValidity('Введіть число без пробілів!');
    numberTwo.reportValidity();
  }

  if (!document.querySelector('.form-error')) {
    const error = document.createElement('p');
    error.className = 'form-error';
    error.textContent = 'Заповніть всі поля коректно, будь-ласка!';
    result.insertAdjacentElement('afterend', error);
  }
}

function calc(num1, num2, operator) {
  switch (operator) {
    case '+':
      return Math.round(num1 + num2);
    case '-':
      return Math.round(num1 - num2);
    case '*':
      return Math.round(num1 * num2);
    case '/':
      return Math.round(num1 / num2);
    default:
      return Math.round('Помилка');
  }
}

function reset() {
  clearInput();
  numberOneValue = '';
  numberTwoValue = '';
  operatorValue = '+';
  result.textContent = 'РЕЗУЛЬТАТ';
}

function clearInput() {
  numberOne.value = '';
  numberTwo.value = '';
  operator.value = '+';
}

clearInput();
