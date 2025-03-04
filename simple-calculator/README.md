# Simple Calculator

This is a simple calculator project that can perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator is designed to take user input and return the result of the specified operation.

## Features

- Addition
- Subtraction
- Multiplication
- Division

## Usage

To use the calculator, you can call the functions defined in the `src/calculator.py` file. Each function takes two numerical parameters and returns the result of the operation.

### Example

```python
from src.calculator import add, subtract, multiply, divide

result_add = add(5, 3)        # Returns 8
result_subtract = subtract(5, 3)  # Returns 2
result_multiply = multiply(5, 3)  # Returns 15
result_divide = divide(5, 3)      # Returns approximately 1.67
```

## Running Tests

To ensure the calculator functions correctly, unit tests are provided in the `tests/test_calculator.py` file. You can run the tests using the following command:

```bash
python -m unittest discover -s tests
```

## Requirements

This project currently does not have any external dependencies. However, you can add any future dependencies to the `requirements.txt` file.

## License

This project is open-source and available under the MIT License.