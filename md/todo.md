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
-
