// 1.form 과 ul을 html에서 가져오기
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

//10.함수추가
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
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
  const nweTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(nweTodo);
}

// 3.submit 새로고침 막기 구동위한 이벤트 리스너 만들기
toDoForm.addEventListener("submit", handleToDoSubmit);

//4.함수에 event 인자를 받아 event.preventDefault() 로 새로고침 방지
//5.input에 들어오는 input value를 얻어내야함
//6.변수 const todoInput 추가
//7.console.log(toDoInput); 로 인풋값 테스트
//8.엔터키 누르면 입력된값이 사라지게 만들자 : toDoInput.value = "";
//9.비워지기전에 인풋값을 저장하자 : const nweTodo = toDoInput.value;
//10.함수추가 : todo 를 추가하는 역할을 담당
//10.paintTodo() 함수는 뭘할지 모르고 있으니, newTodo 인자를 주자
//11.이제 handleToDoSubmit 함수가 paintToDo를 사용하게된 것
//12.paintToDo(nweTodo) 추가 : newTodo 입력값을 paintTodo 라는 함수에 보낸다
//13.이제 painTodo는 무엇을 추가해할지 알게 될거야
//14.paintTodo 함수에 li를 만들고 html에 추가하자
//15.toDoList.appendChild(li)
//16.모든것을 append 하기전에 const button으로 삭제버튼 생성하기
//17.button.innerText로 이모지 x 를 추가하자
//18.button을 li에 추가하자
//19.클릭-이벤트리스너 & function을 만들어서 삭제 버튼과 연결시키자
