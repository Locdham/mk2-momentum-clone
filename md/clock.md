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

```js
const date = new Date();
getHours();
getMinutes();
getSecond();
```
