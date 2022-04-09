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
