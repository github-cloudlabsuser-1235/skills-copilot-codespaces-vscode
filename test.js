// Calculator class to encapsulate all operations
class Calculator {
    // Method to add two numbers
    add(a, b) {
        return a + b;
    }

    // Method to subtract two numbers
    subtract(a, b) {
        return a - b;
    }

    // Method to multiply two numbers
    multiply(a, b) {
        return a * b;
    }

    // Method to divide two numbers
    divide(a, b) {
        if (b === 0) {
            return "Error! Division by zero.";
        }
        return a / b;
    }

    // Method to calculate the percentage
    percentage(a, b) {
        if (b === 0) {
            return "Error! Division by zero.";
        }
        return (a / b) * 100;
    }
}

// Function to display the calculator menu
function displayMenu() {
    console.log("\nCalculator Menu:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Percentage");
    console.log("6. Quit");
}

// Main function to run the calculator
function main() {
    const calculator = new Calculator();
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    function promptUser() {
        displayMenu();
        readline.question("Enter your choice (1-6): ", (choice) => {
            if (choice === "6") {
                console.log("Thanks for using the calculator. Goodbye!");
                readline.close();
                return;
            }

            readline.question("Enter the first number: ", (num1) => {
                readline.question("Enter the second number: ", (num2) => {
                    const a = parseFloat(num1);
                    const b = parseFloat(num2);

                    let result;
                    switch (choice) {
                        case "1":
                            result = calculator.add(a, b);
                            break;
                        case "2":
                            result = calculator.subtract(a, b);
                            break;
                        case "3":
                            result = calculator.multiply(a, b);
                            break;
                        case "4":
                            result = calculator.divide(a, b);
                            break;
                        case "5":
                            result = calculator.percentage(a, b);
                            break;
                        default:
                            console.log("Invalid choice. Please try again.");
                            promptUser();
                            return;
                    }

                    console.log(`Result: ${result}`);
                    promptUser();
                });
            });
        });
    }

    promptUser();
}

// Run the calculator program
main();