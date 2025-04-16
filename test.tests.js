const { expect } = require("chai");
const Calculator = require("./test.js");

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe("Calculator", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it("should initialize result to 0", () => {
        expect(calculator.getResult()).to.equal(0);
    });

    it("should add a number correctly", () => {
        calculator.add(10);
        expect(calculator.getResult()).to.equal(10);
    });

    it("should subtract a number correctly", () => {
        calculator.add(10);
        calculator.subtract(5);
        expect(calculator.getResult()).to.equal(5);
    });

    it("should multiply a number correctly", () => {
        calculator.add(10);
        calculator.multiply(2);
        expect(calculator.getResult()).to.equal(20);
    });

    it("should divide a number correctly", () => {
        calculator.add(10);
        calculator.divide(2);
        expect(calculator.getResult()).to.equal(5);
    });

    it("should throw an error when dividing by zero", () => {
        expect(() => calculator.divide(0)).to.throw("Division by zero is not allowed.");
    });

    it("should reset the result to 0", () => {
        calculator.add(10);
        calculator.reset();
        expect(calculator.getResult()).to.equal(0);
    });

    it("should handle negative numbers correctly", () => {
        calculator.add(-10);
        expect(calculator.getResult()).to.equal(-10);

        calculator.subtract(-5);
        expect(calculator.getResult()).to.equal(-5);

        calculator.multiply(-2);
        expect(calculator.getResult()).to.equal(10);

        calculator.divide(-2);
        expect(calculator.getResult()).to.equal(-5);
    });

    it("should chain multiple operations correctly", () => {
        calculator.add(10);
        calculator.subtract(2);
        calculator.multiply(3);
        calculator.divide(4);
        expect(calculator.getResult()).to.equal(6);
    });
});