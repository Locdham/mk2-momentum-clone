# 5 clock

# 5.0 Intervals

- interval 은 무엇인가?
- 매번 일어나야하는 무언가..예시) "매2초"
- 매2초마다 무언가를 해야하는 것
- js에 내장된 기능이 있음.. setInterval()

```js
setInterval(sayhello, 5000);
//호출하려는 함수의 이름, 기다릴 시간 밀리세컨드로 표기
```

# 5.1 TimeOut and Date

- 지정시간 후 출력

```js
setTimeout(sayhello, 5000);
```

- new Date 오브젝트
- 이 오브젝트를 호출하는 당시의 현재 날짜 및 시간 들을 알려줌

```js
const date = new Date();
getHours();
getMinutes();
getSecond();
```

# 5.2 Padstarts

- 0,1,2..9 방식을 00,01,02..09 로 변경하려면

```js
"1".padStart(2, "0");
("01");
```

- 원하는 문자열의 길이 : 2
- 앞에 Start할 문자 : "0"
- 즉. 원하는 문자열의 길이를 정하고, 앞에 붙어서 시작할 문자를 적어준다

```js
const Hours = String(date.getHours()).padStart(2, "0");
const Minutes = String(date.getMinutes()).padStart(2, "0");
const Seconds = String(date.getSeconds()).padStart(2, "0");

//padStart 사용시 주의점..
//getHours 등은 속성이 숫자여서 String() 으로 감싸준후 문자로 바꾼후 사용한다
```
