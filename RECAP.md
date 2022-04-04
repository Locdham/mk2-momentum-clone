# 2.0 First JS

- js는 작은 괄호에서 큰괄호로, 위에서 아래로 실행된다
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

# 2.11 Return

- 이제는 콘솔에 출력하려고 function 을 쓰지않을것
- 대신 어떤 작업을 처리하고, 그결과를 return 하기위해 function을 사용할것
- 이게 function이 function의 밖과 소통하는 방법
- 무언가를 return 하면, 계산을 담당하는 function 의 코드는 return 값과 같아질것

```js
const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);
```

```js
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

// console.log는 보여지기만 하는 그림의 떡. 꺼내 먹으려면 return필요
// return이 작동하여 값이 정해지면 그 함수는 끝남.
```

# 2.13 Conditional (조건문)

- 조건문은 true 인지 false 인지 알려주기 때문에 중요함
- 뭔가를 확인해야 할 때 사용
- ex)사용자가 로그인 되었다면, 무언가를 보여준다던지...
- 키워드 : if & else

```js
parseInt: 문자(str) 에서 숫자(int) 로 변경 해주는 기능
typeof(): 타입을 확인시켜줌
isNaN() : not a number 라는 의미로, 숫자인지 아닌지 판별하여 true/false로 알려줌
&& : and 조건 표시 - 두가지 조건 true 여야만 true!
|| : or 조건 표시 - 한가지 조건만 true 여도 true!
=== : 같음의 표시
!== : 아님의 표시
```

# 3.0 The Document Object

- 자바스크립트를 사용하는 이유, HTML과의 상호작용을 위함
- HTML의 element들을 자바스크립트로 변경하고 읽을수 있다
- console 에 document 를 입력하면 내가 작성한 html을 가져올 수 있다
- 즉 document는 브라우저에 이미 존재하는 object
- JS는 HTML에 접근하고 읽을 수 있게 설정되어 있음
- js를 통해 html를 바꿀 수도 있다. document.title = "HO";
- 모든 것들은 document로부터 시작해. web site를 의미하기 때문.
- document.body를 호출하면 body항목만 가지고 온다

# 3.1 HTML in Javascript

- HTML 코드와 HTML element에 접근할 수 있다

```js
const title = document.getElementById("title");

title.innerText = "change something";
```

# 3.2 Searching for Elements

- getElementsByClassName() - array로 반환
- getElementsByTagName() - array로 반환
- querySelector()
- 쿼리셀렉터는 엘레멘트를 CSS 방식으로 검색할 수 있다
- CSS selector 자체를 전달함
- 쿼리셀렉터는 단 하나의 엘리멘트를 리턴해줌
- 쿼리셀렉터를 사용할 때, 찾으려는 클래스안에 h1 이 많을수도 있지만,
- 쿼리셀렉터는 가장 첫번째 엘레멘트만 가져온다
- 모두 가져오고 싶을때는, querySelectorAll 를 하면 되지만, array로 가져오게됨

```js
const title = document.querySelector(".hello h1");
const title = document.querySelector("#hello form");
const title = document.querySelectorAll(".hello h1");
//쿼리셀렉터 함수를 사용하여 클래스.hello 의 h1을 명시함
```

# 3.3 Events

- JS에서 대부분 작업할 일은, event 를 listen 하는 것.
- 이벤트란?
- 클릭 하거나, 마우스가 올라가도, 입력, 엔터를 누른다거나 등등..
- 모든 event는 js가 listen할 수 있음
- eventListener : event를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
- title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함

```js
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  console.log("title was clicked");
}

title.addEventListener("click", handleTitleClick);
```
