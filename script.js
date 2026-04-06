const addBtn = document.querySelector("#add-btn");
const subtractBtn = document.querySelector("#subtract-btn");
const multiplyBtn = document.querySelector("#multiply-btn");
const divideBtn = document.querySelector("#divide-btn");
const equalBtn = document.querySelector("#equal-btn");
const clearBtn = document.querySelector("#clear-btn");
const display = document.querySelector("#display");
const num1btn = document.querySelector("#one");
const num2btn = document.querySelector("#two");

let previousNumber = Number(null);
let currentNumber = Number(null);
let currentOperator = null;
let shouldOverwriteCurrentDisplay = true;
let previousInputValue = null;

num1btn.addEventListener("click", () => {
  previousInputValue = 1;
  if (shouldOverwriteCurrentDisplay) {
    display.textContent = "1";
    shouldOverwriteCurrentDisplay = false;
  } else {
    display.textContent += "1";
  }
});

num2btn.addEventListener("click", () => {
  previousInputValue = 2;
  if (shouldOverwriteCurrentDisplay) {
    display.textContent = "2";
    shouldOverwriteCurrentDisplay = false;
  } else {
    display.textContent += "2";
  }
});

addBtn.addEventListener("click", () => {
  shouldOverwriteCurrentDisplay = true;
  if (previousInputValue === "+") {
    return;
  }
  currentNumber = Number(display.textContent);
  previousNumber += currentNumber;
  display.textContent = `${previousNumber}`;
  currentOperator = "+";
  previousInputValue = currentOperator;
});

subtractBtn.addEventListener("click", () => {
  shouldOverwriteCurrentDisplay = true;
  if (previousInputValue === "-") {
    return;
  }
  if (previousNumber === 0) {
    currentNumber = Number(display.textContent);
    previousNumber = currentNumber;
    display.textContent = `${currentNumber}`;
  } else {
    currentNumber = Number(display.textContent);
    previousNumber -= currentNumber;
    display.textContent = `${previousNumber}`;
  }
  currentOperator = "-";
  previousInputValue = currentOperator;
});
