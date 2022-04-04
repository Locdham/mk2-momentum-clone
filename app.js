//모든 기능의 계산기 만들기
const calculator = {
  add: function (firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
  },
  minus: function (firstNumber, secondNumber) {
    console.log(firstNumber - secondNumber);
  },
  divide: function (firstNumber, secondNumber) {
    console.log(firstNumber / secondNumber);
  },
  multiple: function (firstNumber, secondNumber) {
    console.log(firstNumber * secondNumber);
  },
};

calculator.add(2, 1);
calculator.minus(2, 1);
calculator.divide(2, 1);
calculator.multiple(4, 2);
