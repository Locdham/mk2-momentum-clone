# 6.1 Random background

- 지금까지 우리가 해온것은 html로부터 요소들을 가져왔었는데
- JS에서 생성해서 html에 추가할것이야
- html에 JS로 랜덤 이미지 추가하기

```js
const bgImage = document.createElement("img");
bgImage.src = `img/${choiceImage}`;
// html에 요소를 만들어내고 랜덤함수에 따라 이미지 랜덤픽되어 요소에 추가
```

- appendChild() : body에 html을 추가한다는 의미
-
