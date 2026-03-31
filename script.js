const addBtn = document.querySelector("#add-btn");
const minusBtn = document.querySelector("#minus-btn");
const multiplyBtn = document.querySelector("#multiply-btn");
const divideBtn = document.querySelector("#divide-btn");
const equalBtn = document.querySelector("#equal-btn");
const clearBtn = document.querySelector("#clear-btn");
const display = document.querySelector("#display");
const num1btn = document.querySelector("#one");
const num2btn = document.querySelector("#two");

const equationObj = {
  num1: null,
  num2: null,
  operation: null,
};

num1btn.addEventListener("click", () => {
  if (
    display.textContent === "+" ||
    display.textContent === "-" ||
    display.textContent === "*" ||
    display.textContent === "/"
  ) {
    clearDisplay();
  }
  display.textContent += "1";
});
num2btn.addEventListener("click", () => {
  if (
    display.textContent === "+" ||
    display.textContent === "-" ||
    display.textContent === "*" ||
    display.textContent === "/"
  ) {
    clearDisplay();
  }
  display.textContent += "2";
});

addBtn.addEventListener("click", () => {
  !equationObj.num1
    ? (equationObj.num1 = display.textContent)
    : (equationObj.num2 = display.textContent);
  clearDisplay();
  display.textContent += "+";
  equationObj.operation = display.textContent;
});

equalBtn.addEventListener("click", () => {
  equationObj.num2 = display.textContent;
  clearDisplay();
  display.textContent = operate(
    parseInt(equationObj.num1),
    equationObj.operation,
    parseInt(equationObj.num2),
  );
});

const addNumber = (num1, num2) => num1 + num2;
const subtractNumber = (num1, num2) => num1 - num2;
const multiplyNumber = (num1, num2) => num1 * num2;
const divideNumber = (num1, num2) => num1 / num2;

const operate = (num1, operation, num2) => {
  if (operation === "+") {
    return addNumber(num1, num2);
  }
  if (operation === "-") {
    return subtractNumber(num1, num2);
  }
  if (operation === "*") {
    return multiplyNumber(num1, num2);
  }
  if (operation === "*") {
    return divideNumber(num1, num2);
  }
};

const clearDisplay = () => {
  display.textContent = "";
};
