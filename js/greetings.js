// html에서 찾아 사용할 클래스들을 js에 등록
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //"hidden"클래스는 두곳이나 사용되기에 변수로 대문자 지정
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //서브밋의 기본실행 새로고침을 막아주고
  loginForm.classList.add(HIDDEN_CLASSNAME); // 사용자가 이름을 입력하면 로그인폼에 .hidden 클래스를 추가하여 숨겨준다
  const username = loginInput.value; //유저네임 변수에 로그인인풋밸류 즉 입력될 사용자 이름을 받아준다
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = "Hello " + username; //그리팅 변수에 innerText를 사용하여 로그인폼이 없어진후 인사말을 보여줌
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //form 을 보여줄것
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //greeting 을 보여줄것
  paintGreetings(savedUsername);
}
