// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return "Error! Division by zero.";
    }
    return a / b;
}

// Main calculator function
function calculator() {
    const operation = prompt("Select operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide");

    if (['1', '2', '3', '4'].includes(operation)) {
        const num1 = parseFloat(prompt("Enter the first number:"));
        const num2 = parseFloat(prompt("Enter the second number:"));

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Invalid input! Please enter numeric values.");
            return;
        }

        let result;
        switch (operation) {
            case '1':
                result = add(num1, num2);
                console.log(`${num1} + ${num2} = ${result}`);
                break;
            case '2':
                result = subtract(num1, num2);
                console.log(`${num1} - ${num2} = ${result}`);
                break;
            case '3':
                result = multiply(num1, num2);
                console.log(`${num1} * ${num2} = ${result}`);
                break;
            case '4':
                result = divide(num1, num2);
                console.log(`${num1} / ${num2} = ${result}`);
                break;
        }
    } else {
        console.log("Invalid operation selected.");
    }
}

// Run the calculator
calculator();