// Calculator class definition
class Calculator {
    // Constructor initializes the result to 0
    constructor() {
        this.result = 0;
    }

    // Method to add a number
    add(number) {
        this.result += number;
        return this.result;
    }

    // Method to subtract a number
    subtract(number) {
        this.result -= number;
        return this.result;
    }

    // Method to multiply by a number
    multiply(number) {
        this.result *= number;
        return this.result;
    }

    // Method to divide by a number
    divide(number) {
        if (number === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        this.result /= number;
        return this.result;
    }

    // Method to reset the calculator
    reset() {
        this.result = 0;
        return this.result;
    }

    // Method to get the current result
    getResult() {
        return this.result;
    }
}

// Example usage of the Calculator class
const calculator = new Calculator();

console.log("Initial result:", calculator.getResult());
console.log("Add 10:", calculator.add(10));
console.log("Subtract 5:", calculator.subtract(5));
console.log("Multiply by 3:", calculator.multiply(3));
console.log("Divide by 2:", calculator.divide(2));
console.log("Reset:", calculator.reset());