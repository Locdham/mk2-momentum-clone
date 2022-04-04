# 2.0 First JS

- 바디 내부의 맨 밑줄에 등록 해야만 한다.

```js
<body>
  <script src="app.js"></script>
</body>
```

# 2.1 Basic Data Type

1. 숫자 Number

```js
정수(Integer) // 1, 2, 3, 4 ...
소수(Float) // 1.555, 2.545345 ...
* Number타입은 서로 연산기호를 이용하여 계산할 수 있다.
```

2. 문자 String

```js
str: 처음부터 끝까지 문자(Text)로 구성되어 있다는 의미
"Hello," + " My name is Nico" // Hello, My name is Nico
* String타입은 ""을 이용하여 입력하고 String타입의 합은 두개를 합
쳐서 출력한다.
```

# 2.2 Variables 변수

- console.log(프린트);
- 콘솔에 log 또는 print 하는 일을함.
- 괄호안에 있는것이 출력됨 == python의 print()
- 변수에 문자간 공백은 있을수 없다.
- 공백이 필요하다면 const myName = "hun" 다음 문자의 첫문자를 대문자로 넣어라.(camelcase)
- const = constant(상수) 항상 변하지 않는 값을 의미

```js
const a = 10;
const b = 5;
const myName = "ian";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("Hello " + myName);
```

# 2.3 const and let

- const: 생성후 변수 업데이트 불가(고정값)
- let : 생성후 변수 업데이트 가능하다
- ~~var : 어디서든 변수 업데이트 가능 (값의 보호불가)~~
- 기본적으로 const 사용하며, 업데이트가 허용되어야 하는 변수의 경우 let 사용
- 규칙이 정해져 있기때문에 코드의 의미를 알기 쉽다

```js
const a = 10;
const b = 5;
let myName = "ian";
```

```js
let a = b;
let a = c;
//재선언 금지

let a = b;
a = c;
//재할당은 가능

const a = b;
const a = c;
//재선언 금지

const a = b;
a = c;
//재할당 금지

var a = b;
var a = c;
a = d;
//재선언, 재할당 가능
```

# 2.4 Booleans

- True: 참, on
- False: 거짓, off
- null: nothing, 비어있음을 의도적으로 표현
- undefined: 변수는 존재 하지만, 값이 정의되지 않은 상태

# 2.5 Arrays []

- 데이터를 정리하는 법, 데이터를 나열
- 하나의 변수안에 데이터의 list를 가지는것
- 규칙 : []대괄호로 감싸며 ,쉼표로 분리한다
- 선언 : const 배열명 = [1, 2, "hello", false, null, undefined]; 안에 뭐든 넣어도 됨
- 배열명[index 0부터];로 특정 순서의 값을 지정할 수 있음.
- 배열에 값을 추가 하는 법 --> 배열명.push(값);
- 이렇게 값을 추가하거나 변경할 수도 있음 --> 배열명[index] = 값;

```js
const dyaOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsence = [1, 2, "hello", "ian", true, false];
console.log(dyaOfWeek, nonsence);

//다섯번째 요일은 무엇인가? 라고 한다면..
console.log(dayOfWeek[4]);

//array에 일요일 추가하기..
dyaOfWeek.push("sun");
```

# 2.6 Objects {}

- object는 property를 가진 데이터를 저장해주며, { } 를 사용한다.
- 리스트 처럼 오브젝트에 추가하거나 업데이트를 할 수 있다.
- 설명이 필요하지 않은 데이터 리스트들은 array로,
- 설명이 필요한 정보가 담긴 데이터 리스트들은 object로!

```js
const player = {
  name: "Son",
  team: "Tottenham",
  foot: "both",
  speed: 100,
  handsome: true,
};

player.backnumber = "7";
console.log(player.backnumber);
```

# 2.7 Function () part.01

- 어떤 코드를 캡슐화해서 실행을 여러번 할 수 있다.

```js
function sayHello() {
  console.log("Hellow world");
}

sayHello();
sayHello();
sayHello();
```

# 2.8 Function () part.02

- arguments
- 펑션의 괄호 안의 매개변수에서 아규먼트를 받아들일 수 있다.
- 아규먼트는 하나만 받을 수 있는게 아니라 여러개를 받을 수 있음.
- function의 값은 function 블럭 안에서만 존재한다.

```js
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " I am " + age);
}

sayHello("nico", 15);
sayHello("dal", 25);
sayHello("lynn", 30);
```

```js
function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

plus(8, 60);
```

```js
const player = {
  name: "son",
  age: 29,
  good: true,
  sayHello: function (otherPersonName) {
    console.log("halo" + otherPersonName + "nice to meet you");
  },
};

console.log(player.name);

player.sayHello("lynn");
player.sayHello("ian");
```

# 2.10 Recap

## 오브젝트

- 의미가 있는 property를 저장하려고 할때
- 연관되어 있는 property들을 그룹으로 묶어서 저장 할때
- 자주쓰는 예시로..
- 여느 변수를 만들때 처럼 같은 시작으로 player 오브젝트를 만들고
- 어레이, 불리안, 텍스트 또는 null 을 갖는것 대신에

```js
const player = {
  name: "ian",
  age: 1,
};

console.log(player, console);
player.female = true;
console.log(player);
```

## Function(함수)

- 반복적 코드 재생 가능
- 특정 input을 기반으로 같은행동을 반복하게함
- function의 목적은 여러가지 일을 같은 코드로 하기 위함

```js
function plus() {
  console.log(2 + 2);
}
plus();

// 여기서 발전 시키자면...
// function 안에 데이터를 미리 넣어두는 것보다
```

```js
function plus(firstNumber, secondNumber) {
  console.log(firstNumber, secondNumber);
}
plus(213, 987);
plus(34, 566);

// function 밖에서 데이터를 넣게 하는게 효율적임
// 순서를 지켜주는 것이 중요함
// 이것이 function을 만들고 데이터를 받는법이다
```

```js
// -5 하기
function minusFive(firstNumber) {
  console.log(firstNumber - 5);
}
minusFive(10);

//이렇듯 firstNumber 같은 argument들은 설정된 function의 {}바디 안에서만 사용가능하다
```

```js
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
```
