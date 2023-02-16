let previousOperand = '';
let nextOperand = '';
let currentOperation = null;
let shouldResetScreen = false;


// grab components from html
const screenCurrent = document.querySelector('.screen-current');
const screenPrevious = document.querySelector('.screen-previous');
const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const clearBtn = document.getElementById('btnClear');
const deleteBtn = document.getElementById('btnDelete');
const pointBtn = document.getElementById('period');
const equalsBtn = document.getElementById('equals');

// functions for non number and operation buttons
equalsBtn.addEventListener('click', calculate)
clearBtn.addEventListener('click', clear);
pointBtn.addEventListener('click', handlePoint);
deleteBtn.addEventListener('click', handleDelete);


numberBtns.forEach((button) => 
    button.addEventListener('click', () => displayNumber(button.textContent))
);

operatorBtns.forEach((button) => 
    button.addEventListener('click', () => setOperation(button.textContent))
);

function displayNumber(number) {
    if (screenCurrent.textContent === '0' || shouldResetScreen)
        resetScreen();
    screenCurrent.textContent += number;
};

function setOperation(operator) {
    if (currentOperation !== null) calculate();
    previousOperand = screenCurrent.textContent
    currentOperation = operator
    screenPrevious.textContent = `${previousOperand} ${currentOperation}`
    shouldResetScreen = true
}

function resetScreen() {
    screenCurrent.textContent = '';
    shouldResetScreen = false;
};

function clear() {
    screenCurrent.textContent = '0';
    screenPrevious.textContent = '';
    previousOperand = '';
    nextOperand = '';
    currentOperation = null;
};

function calculate() {
    if (currentOperation === null || shouldResetScreen) return;
    if (currentOperation === '÷' && screenCurrent.textContent === '0') {
        alert("Ah Ah Ah! No no divide by zero")
        return
    }

    nextOperand = screenCurrent.textContent;
    screenCurrent.textContent = round(operate(currentOperation, previousOperand, nextOperand));
    screenPrevious.textContent = `${previousOperand} ${currentOperation} ${nextOperand} =`
    currentOperation = null
    shouldResetScreen = true;
}

function handlePoint() {
    if (shouldResetScreen) resetScreen();
    if (screenCurrent.textContent === '')
        screenCurrent.textContent = '0';
    if (screenCurrent.textContent.includes('.')) return
        screenCurrent.textContent += '.'
}

function handleDelete() {
    if (screenCurrent.textContent === '0') return;
    if (screenCurrent.textContent.length === 1) {
        return screenCurrent.textContent = '0'
    }
    screenCurrent.textContent = screenCurrent.textContent.toString().slice(0, -1)
    
}

function round(number) {
    return Math.round(number * 1000000) / 1000000;
}


// operation functions
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '×':
            return multiply(a, b);
        case '÷':
            if (b === 0) return null;
            else return divide(a, b);
        default:
            return null
    };
};


