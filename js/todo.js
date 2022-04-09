// form 과 ul을 html에서 가져오기
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// submit 새로고침 막기 함수
function handleToDoSubmit(event) {
  event.preventDefault();
  const nweTodo = toDoInput.value;
  toDoInput.value = "";
}

// submit 새로고침 막기 구동위한 이벤트 리스너 만들기
toDoForm.addEventListener("submit", handleToDoSubmit);

//함수에 event 인자를 받아 event.preventDefault() 로 새로고침 방지
//input에 들어오는 input value를 얻어내야함
//변수 const todoInput 추가
//console.log(toDoInput); 로 인풋값 테스트
//엔터키 누르면 입력된값이 사라지게 만들자 : toDoInput.value = "";
//비워지기전에 인풋값을 저장하자 : const nweTodo = toDoInput.value;
