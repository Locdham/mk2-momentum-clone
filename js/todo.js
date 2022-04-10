// 1.form 과 ul을 html에서 가져오기
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

//20.저장공간인 toDos array 생성
//비어있기 때문에 새로운 todo만 저장되는것이 문제
//const 를 let으로 바꿔서 업데이트가 가능하도록 만들고
// const toDos = [];
let toDos = [];

//22.저장역할의 saveToDos 함수 생성 (key, value)
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

//10.화면에 todo를 그려줌
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// 2.submit 새로고침 막기 함수
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObject);
  paintToDo(newTodoObject);
  saveToDos();
}

// 3.submit 새로고침 막기 구동위한 이벤트 리스너 만들기
toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

//4.함수에 event 인자를 받아 event.preventDefault() 로 새로고침 방지
//5.input에 들어오는 input value를 얻어내야함
//6.변수 const todoInput 추가
//7.console.log(toDoInput); 로 인풋값 테스트
//8.엔터키 누르면 입력된값이 사라지게 만들자 : toDoInput.value = "";
//9.비워지기전에 인풋값을 저장하자 : const newTodo = toDoInput.value;
//10.함수추가 : todo 를 추가하는 역할을 담당
//10.paintTodo() 함수는 뭘할지 모르고 있으니, newTodo 인자를 주자
//11.이제 handleToDoSubmit 함수가 paintToDo를 사용하게된 것
//12.paintToDo(newTodo) 추가 : newTodo 입력값을 paintTodo 라는 함수에 보낸다
//13.이제 painTodo는 무엇을 추가해할지 알게 될거야
//14.paintTodo 함수에 li를 만들고 html에 추가하자
//15.toDoList.appendChild(li)
//16.모든것을 append 하기전에 const button으로 삭제버튼 생성하기
//17.button.innerText로 이모지 x 를 추가하자
//18.button을 li에 추가하자
//19.클릭-이벤트리스너 & function을 만들어서 삭제 버튼과 연결시키자
//20.todo 저장을 위한 array를 만들자
//21.newTodo가 그려지기 전에 toDos array를 가지고 와서 newTodo 를 push
//22.입력한 todo를 저장하기위해 saveToDos 함수를 생성하자
//23.saveToDos는 toDos array의 내용을 localStorage에 넣는거야
