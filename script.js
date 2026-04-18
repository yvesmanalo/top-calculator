const addBtn = document.querySelector("#add-btn");
const subtractBtn = document.querySelector("#subtract-btn");
const multiplyBtn = document.querySelector("#multiply-btn");
const divideBtn = document.querySelector("#divide-btn");
const equalBtn = document.querySelector("#equal-btn");
const clearBtn = document.querySelector("#clear-btn");
const display = document.querySelector("#display");
const num1btn = document.querySelector("#one");
const num2btn = document.querySelector("#two");
const num3btn = document.querySelector("#three");
const num4btn = document.querySelector("#four");
const num5btn = document.querySelector("#five");
const num6btn = document.querySelector("#six");
const num7btn = document.querySelector("#seven");
const num8btn = document.querySelector("#eight");
const num9btn = document.querySelector("#nine");
const num0btn = document.querySelector("#zero");
const decimalPointBtn = document.querySelector("#decimal-point");

let prevNumber = Number(null);
let currNumber = Number(null);
let currOperator = String(null);
let shouldOverwriteCurrentDisplay = true;
let isOperatorButtonPressed = false;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Cannot divide by zero";
  }
}

function operate(num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  }
  if (operator === "-") {
    return subtract(num1, num2);
  }
  if (operator === "*") {
    return multiply(num1, num2);
  }
  if (operator === "/") {
    return divide(num1, num2);
  }
}

num1btn.addEventListener("click", () => {
  if (!isOperatorButtonPressed) {
    isOperatorButtonPressed = false;
    addBtn.removeAttribute("disabled");
    subtractBtn.removeAttribute("disabled");
    multiplyBtn.removeAttribute("disabled");
    divideBtn.removeAttribute("disabled");
  }

  if (shouldOverwriteCurrentDisplay) {
    display.textContent = "1";
    shouldOverwriteCurrentDisplay = false;
  } else {
    display.textContent += "1";
  }

  equalBtn.removeAttribute("disabled");
});

num2btn.addEventListener("click", () => {
  if (!isOperatorButtonPressed) {
    isOperatorButtonPressed = false;
    addBtn.removeAttribute("disabled");
    subtractBtn.removeAttribute("disabled");
    multiplyBtn.removeAttribute("disabled");
    divideBtn.removeAttribute("disabled");
  }

  if (shouldOverwriteCurrentDisplay) {
    display.textContent = "2";
    shouldOverwriteCurrentDisplay = false;
  } else {
    display.textContent += "2";
  }

  equalBtn.removeAttribute("disabled");
});

num3btn.addEventListener("click", () => {
  if (!isOperatorButtonPressed) {
    isOperatorButtonPressed = false;
    addBtn.removeAttribute("disabled");
    subtractBtn.removeAttribute("disabled");
    multiplyBtn.removeAttribute("disabled");
    divideBtn.removeAttribute("disabled");
  }

  if (shouldOverwriteCurrentDisplay) {
    display.textContent = "3";
    shouldOverwriteCurrentDisplay = false;
  } else {
    display.textContent += "3";
  }

  equalBtn.removeAttribute("disabled");
});

num4btn.addEventListener("click", () => {
  if (!isOperatorButtonPressed) {
    isOperatorButtonPressed = false;
    addBtn.removeAttribute("disabled");
    subtractBtn.removeAttribute("disabled");
    multiplyBtn.removeAttribute("disabled");
    divideBtn.removeAttribute("disabled");
  }

  if (shouldOverwriteCurrentDisplay) {
    display.textContent = "4";
    shouldOverwriteCurrentDisplay = false;
  } else {
    display.textContent += "4";
  }

  equalBtn.removeAttribute("disabled");
});

num5btn.addEventListener("click", () => {
  if (!isOperatorButtonPressed) {
    isOperatorButtonPressed = false;
    addBtn.removeAttribute("disabled");
    subtractBtn.removeAttribute("disabled");
    multiplyBtn.removeAttribute("disabled");
    divideBtn.removeAttribute("disabled");
  }

  if (shouldOverwriteCurrentDisplay) {
    display.textContent = "5";
    shouldOverwriteCurrentDisplay = false;
  } else {
    display.textContent += "5";
  }

  equalBtn.removeAttribute("disabled");
});

num6btn.addEventListener("click", () => {
  if (!isOperatorButtonPressed) {
    isOperatorButtonPressed = false;
    addBtn.removeAttribute("disabled");
    subtractBtn.removeAttribute("disabled");
    multiplyBtn.removeAttribute("disabled");
    divideBtn.removeAttribute("disabled");
  }

  if (shouldOverwriteCurrentDisplay) {
    display.textContent = "6";
    shouldOverwriteCurrentDisplay = false;
  } else {
    display.textContent += "6";
  }

  equalBtn.removeAttribute("disabled");
});

num7btn.addEventListener("click", () => {
  if (!isOperatorButtonPressed) {
    isOperatorButtonPressed = false;
    addBtn.removeAttribute("disabled");
    subtractBtn.removeAttribute("disabled");
    multiplyBtn.removeAttribute("disabled");
    divideBtn.removeAttribute("disabled");
  }

  if (shouldOverwriteCurrentDisplay) {
    display.textContent = "7";
    shouldOverwriteCurrentDisplay = false;
  } else {
    display.textContent += "7";
  }

  equalBtn.removeAttribute("disabled");
});

num8btn.addEventListener("click", () => {
  if (!isOperatorButtonPressed) {
    isOperatorButtonPressed = false;
    addBtn.removeAttribute("disabled");
    subtractBtn.removeAttribute("disabled");
    multiplyBtn.removeAttribute("disabled");
    divideBtn.removeAttribute("disabled");
  }

  if (shouldOverwriteCurrentDisplay) {
    display.textContent = "8";
    shouldOverwriteCurrentDisplay = false;
  } else {
    display.textContent += "8";
  }

  equalBtn.removeAttribute("disabled");
});

num9btn.addEventListener("click", () => {
  if (!isOperatorButtonPressed) {
    isOperatorButtonPressed = false;
    addBtn.removeAttribute("disabled");
    subtractBtn.removeAttribute("disabled");
    multiplyBtn.removeAttribute("disabled");
    divideBtn.removeAttribute("disabled");
  }

  if (shouldOverwriteCurrentDisplay) {
    display.textContent = "9";
    shouldOverwriteCurrentDisplay = false;
  } else {
    display.textContent += "9";
  }

  equalBtn.removeAttribute("disabled");
});

num0btn.addEventListener("click", () => {
  if (!isOperatorButtonPressed) {
    isOperatorButtonPressed = false;
    addBtn.removeAttribute("disabled");
    subtractBtn.removeAttribute("disabled");
    multiplyBtn.removeAttribute("disabled");
    divideBtn.removeAttribute("disabled");
  }

  if (shouldOverwriteCurrentDisplay) {
    display.textContent = "0";
    shouldOverwriteCurrentDisplay = false;
  } else {
    display.textContent += "0";
  }

  equalBtn.removeAttribute("disabled");
});

decimalPointBtn.addEventListener("click", () => {
  if (!isOperatorButtonPressed) {
    isOperatorButtonPressed = false;
    addBtn.removeAttribute("disabled");
    subtractBtn.removeAttribute("disabled");
    multiplyBtn.removeAttribute("disabled");
    divideBtn.removeAttribute("disabled");
  }

  if (shouldOverwriteCurrentDisplay) {
    display.textContent = ".";
    shouldOverwriteCurrentDisplay = false;
  } else {
    display.textContent += ".";
  }

  decimalPointBtn.setAttribute("disabled", true);
  isDecimalPointBtnPressed = true;

  equalBtn.removeAttribute("disabled");
});

addBtn.addEventListener("click", () => {
  decimalPointBtn.removeAttribute("disabled");
  shouldOverwriteCurrentDisplay = true;

  if (!prevNumber) {
    prevNumber = Number(display.textContent);
  } else {
    currNumber = Number(display.textContent);
    prevNumber = operate(prevNumber, currNumber, currOperator);
    display.textContent = `${prevNumber}`;
  }

  currOperator = "+";
  addBtn.setAttribute("disabled", true);
  subtractBtn.setAttribute("disabled", true);
  multiplyBtn.setAttribute("disabled", true);
  divideBtn.setAttribute("disabled", true);
});

subtractBtn.addEventListener("click", () => {
  decimalPointBtn.removeAttribute("disabled");
  shouldOverwriteCurrentDisplay = true;

  if (!prevNumber) {
    prevNumber = Number(display.textContent);
  } else {
    currNumber = Number(display.textContent);
    console.log(prevNumber, currNumber, currOperator);
    display.textContent = `${prevNumber}`;
  }

  currOperator = "-";
  addBtn.setAttribute("disabled", true);
  subtractBtn.setAttribute("disabled", true);
  multiplyBtn.setAttribute("disabled", true);
  divideBtn.setAttribute("disabled", true);
});

multiplyBtn.addEventListener("click", () => {
  decimalPointBtn.removeAttribute("disabled");
  shouldOverwriteCurrentDisplay = true;

  if (!prevNumber) {
    prevNumber = Number(display.textContent);
  } else {
    currNumber = Number(display.textContent);
    prevNumber = operate(prevNumber, currNumber, currOperator);
    display.textContent = `${prevNumber}`;
  }

  currOperator = "*";
  addBtn.setAttribute("disabled", true);
  subtractBtn.setAttribute("disabled", true);
  multiplyBtn.setAttribute("disabled", true);
  divideBtn.setAttribute("disabled", true);
});

divideBtn.addEventListener("click", () => {
  shouldOverwriteCurrentDisplay = true;
  decimalPointBtn.removeAttribute("disabled");

  if (!prevNumber) {
    prevNumber = Number(display.textContent);
  } else {
    currNumber = Number(display.textContent);
    console.log(prevNumber, currNumber, currOperator);
    prevNumber = operate(prevNumber, currNumber, currOperator);
    display.textContent = `${prevNumber}`;
  }

  currOperator = "/";
  addBtn.setAttribute("disabled", true);
  subtractBtn.setAttribute("disabled", true);
  multiplyBtn.setAttribute("disabled", true);
  divideBtn.setAttribute("disabled", true);
});

equalBtn.addEventListener("click", () => {
  shouldOverwriteCurrentDisplay = true;
  currNumber = Number(display.textContent);
  if (
    operate(prevNumber, currNumber, currOperator) === "Cannot divide by zero"
  ) {
    display.textContent = operate(prevNumber, currNumber, currOperator);
    addBtn.setAttribute("disabled", true);
    subtractBtn.setAttribute("disabled", true);
    multiplyBtn.setAttribute("disabled", true);
    divideBtn.setAttribute("disabled", true);
  } else if (operate(prevNumber, currNumber, currOperator) === undefined) {
    display.textContent = currNumber;
    prevNumber = currNumber;
  } else {
    prevNumber = operate(prevNumber, currNumber, currOperator);
    display.textContent = prevNumber.toFixed(2);
  }
  equalBtn.setAttribute("disabled", true);
  decimalPointBtn.removeAttribute("disabled");
  prevNumber = Number(null);
  currNumber = Number(null);
  currOperator = String(null);
  shouldOverwriteCurrentDisplay = true;
});

clearBtn.addEventListener("click", () => {
  prevNumber = Number(null);
  currNumber = Number(null);
  currOperator = String(null);
  shouldOverwriteCurrentDisplay = true;
  display.textContent = "";
  equalBtn.removeAttribute("disabled");
  addBtn.removeAttribute("disabled");
  subtractBtn.removeAttribute("disabled");
  multiplyBtn.removeAttribute("disabled");
  divideBtn.removeAttribute("disabled");
  decimalPointBtn.removeAttribute("disabled");
});
