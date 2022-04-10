# 7. To-do List

# 7.0 Setup

- 기본적으로 html에서 몇가지 요소를 만들어준다

```html
<form id="todo-form">
  <input type="text" placeholder="write a To-do and press Enter" required />
</form>
<ul id="todo-list"></ul>
```

- li 요소의 세부 리스트는 JS로 만들것이기 때문에 틀만 제작해놓음
- form 과 ul을 JS로 가져가보자

```js
const todoInput =
// 변수를 설정할때 두가지 옵션이 존재
// 첫째, 전체 document 에서 찾게 만들수 잇고
// 둘째, toDoForm 안에서만 찾게 만들수 있어
const todoInput = document.querySelector("#todo-form input");
const todoInput = toDoForm.querySelector("input");
```

- 인풋값 비워지기전에 인풋값을 저장하자

```js
const nweTodo = toDoInput.value;
toDoInput.value = "";
// newTodo 변수에는 비워지기 전에 값이 복사 되어있기 때문에 이후에 얼마든지 사용가능하다
```

# 7.1 Adding Todo

- 아래와 같이 만드려고 한다

```html
<ul id="todo-list">
  <li>
    <span></span>
    <button></button>
  </li>
</ul>
```

- js로 위와같이 요소를 만들기 위해

```js
const li = document.createElement("li");
const span = document.createElement("span");
li.appendChild(span);
//li에 span 자식을 갖게 해주기
```

- newTodo 밸류를 span에 추가해주기
- ul인 toDoList에 appendChild 하여 (li) 넣어주기

```js
span.innerText = newTodo;
toDoList.appendChild(li);
```

# 7.2 Deleting Todo

- todo를 삭제하는 버튼을 추가할 것

- 코드 정리하자면,
- li를 만들고
- span을 만들고
- span의 텍스트를 변경해주고
- button을 만들고
- button의 텍스트를 변경해주었어
- span을 li의 자식으로 넣어주고
- button도 li의 자식으로 넣어줫지
- 기억해 append는 맨 마지막줄들에 코딩해줘야함
- button은 span 뒤에 놓고
- 그후, li를 toDoList에 추가한다

```js
const li = event.target.parentElement;
//삭제버튼을 눌렀을때 이벤트의 정보만으로 알수가 없다.
//event.target.parentElement 순으로 정보를 알아내어, 해당 클릭의 부모인 li를 지운다
```

# 7.3 Saving Todo

- localStorage 를 이용한 todo 저장하기 위해
- todo를 저장할 array를 만들자
- newTodo가 그려질때 마다 그 텍스트를 array에 push 하자
- 문제는 localStorage 에는 array를 저장할 수 없다
- localStorage에는 오직 텍스트만 저장할 수 있다
- 하지만 array로 저장을 하고싶다면
- JSON.stringify() 를 사용하자
- 모든값을 string으로 바꾸고 저장하고 싶을때 사용
- JSON.parse()
- 모든값을 array로 바꾸고 저장 해줌

```js
JSON.stringify(toDos);
-'["a","b","c","d"]';

JSON.parse(localStorage.getItem("toDos"));
["a", "b", "c", "d"];
```

# 7.4 Loading Todo

- 새로고침시 localStorage에 남아있으나 화면 출력은 안되는 문제
- js는 array에 있는 각각의 item에 대해 function을 실행할 수 있게 해줌
- forEach는 해당 array에 있는 item에 대해서 설정한 function을 실행할 수 있게 해줘

```js
function sayHello(item) {
  console.log("this turn off", item);
}

parsedTodos.forEach(sayHello);
```

- arrow function (화살표 함수)

```js
parsedToDos.forEach(item => console.log("this is the turn of ", item));
//위처럼 함수를 생성하는 대신, array안의 각각 아이템에 대해 실행하라 의미
```

# 7.5 Loading Todo 02

- 비어있기 때문에 새로운 todo만 저장되는것이 문제
- const 를 let으로 바꿔서 업데이트가 가능하도록 만들자

```js
const toDos = [];
let toDos = [];
```

```js
toDos = parsedToDos;
저장된 이전의 todo들도 남아있게 해주며, array는 빈값이 아니게 된다
```

# 7.6 Deleting Todo

- Todo를 지울때마다 localStorage 업데이트
- todo들에게 ID를 부여

```js
//이렇게 만든다면..
[{ id: 1234, text: "javascript" }];
```

- 랜덤으로 id를 생성하려면

```js
Date.now();
1649568825304;
//밀리초(1000/1초)를 주는 함수로서 램덤숫자를 얻기 좋다
```

- newToDoObj 를 생성하자
- 아이디, 텍스트 정보 부여후, 변수 newTodoObject 사용한다

```js
const newTodoObject = {
  text: newTodo,
  id: Date.now(),
};
```

- 이제 각 li마다 id가 부여된다

```js
li.id = newTodo.id;
```

- 삭제를 위해 이제 우리가 누른 버튼의 id를 찾아야한다
