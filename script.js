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
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return null
    };
};
