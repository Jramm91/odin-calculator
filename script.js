

// grab components from html
const screenCurrent = document.querySelector('.screen-current');
const screenPrevious = document.querySelector('.screen-previous');
const numberBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const clearBtn = document.getElementById('btnClear');
const deleteBtn = document.getElementById('btnDelete');
const pointBtn = document.getElementById('period');
const equalsBtn = document.getElementById('equals');


numberBtns.forEach((button) => button.addEventListener('click', () => console.log(button.textContent))
)

operatorBtns.forEach((button) => button.addEventListener('click', () => console.log(button.textContent))
)

const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    while (b === 0) {
        return "Ah Ah Ah! No divide by zero!";
    };
    return a / b;
};

const operate = (operator, a, b) => {
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
            return divide(a, b);
        default:
            return null
    };
};


