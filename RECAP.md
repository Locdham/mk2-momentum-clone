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

- console.log(123123123123);
- 콘솔에 log 또는 print 하는 일을함.
- 괄호안에 있는것이 출력됨.
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
