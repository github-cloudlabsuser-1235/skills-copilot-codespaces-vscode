const Calculator = require('./test.js'); // Adjust the path if necessary

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add() should return the sum of two numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(-1, 1)).toBe(0);
        expect(calculator.add(0, 0)).toBe(0);
    });

    test('subtract() should return the difference of two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(0, 5)).toBe(-5);
        expect(calculator.subtract(-3, -2)).toBe(-1);
    });

    test('multiply() should return the product of two numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-2, 3)).toBe(-6);
        expect(calculator.multiply(0, 5)).toBe(0);
    });

    test('divide() should return the quotient of two numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
        expect(calculator.divide(-6, 3)).toBe(-2);
    });

    test('divide() should return an error message when dividing by zero', () => {
        expect(calculator.divide(5, 0)).toBe("Error! Division by zero.");
    });

    test('percentage() should return the percentage of the first number relative to the second', () => {
        expect(calculator.percentage(50, 100)).toBe(50);
        expect(calculator.percentage(25, 50)).toBe(50);
        expect(calculator.percentage(0, 10)).toBe(0);
    });

    test('percentage() should return an error message when dividing by zero', () => {
        expect(calculator.percentage(10, 0)).toBe("Error! Division by zero.");
    });
});