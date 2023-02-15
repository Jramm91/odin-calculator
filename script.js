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


