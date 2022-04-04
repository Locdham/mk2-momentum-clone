const calculator = {
  add: function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  },
  minus: function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  },
  divide: function (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
  },
  multiple: function (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  },
  power: function (firstNumber, secondNumber) {
    return firstNumber ** secondNumber;
  },
};

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const multipleResult = calculator.multiple(10, minusResult);
const divideResult = calculator.divide(multipleResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
