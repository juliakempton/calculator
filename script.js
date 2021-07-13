const numberBtns = document.querySelectorAll(".digit-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const currentEquation = document.getElementById("current-equation");
const currentAnswer = document.getElementById("current-answer");
let firstNum;
let secondNum;
let operator;
let numClicks = 0;
const clearBtn = document.querySelector("#clear-btn");

numberBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        currentEquation.textContent += btn.textContent;
    })
})

operatorBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        currentEquation.textContent += ` ${btn.textContent} `;
        numClicks += 1;
        if (numClicks >= 2) {
            getNumsAndOperators(currentEquation.textContent);
            console.log(operate(operator, firstNum, secondNum))
            currentAnswer.textContent = operate(operator, firstNum, secondNum);

        }
    })
})



function getNumsAndOperators(equation) {
    let smallestIndex = equation.length - 1;
    let operatorUsed;
    let operatorIndices = [];
    const operators = ["+", "-", "x", "÷"];
    operators.forEach(thisOperator => {
        let currentIndex = equation.indexOf(thisOperator);
        operatorIndices.push(currentIndex);
        if (currentIndex > -1 && currentIndex < smallestIndex) {
            smallestIndex = currentIndex;
            operator = thisOperator;
        }
    })
    console.log(operator)

    firstNum = equation.slice(0, smallestIndex);
    console.log(firstNum);

    secondNum = equation.slice(smallestIndex + 2, equation.length - 3);
    console.log(secondNum);
}

clearBtn.addEventListener("click", () => {
    currentEquation.textContent = "";
    currentAnswer.textContent = "";
    numClicks = 0;
})

function add(num1, num2) {
    return +num1 + +num2;
}

function subtract(num1, num2) {
    return +num1 - +num2;
}

function multiply(num1, num2) {
    return +num1 * +num2;
}

function divide(num1, num2) {
    return +num1 / +num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+": 
            return add(num1, num2);
        case "-" :
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);

    }
}