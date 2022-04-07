// html에서 찾아 사용할 클래스들을 js에 등록
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //"hidden"클래스는 두곳이나 사용되기에 변수로 대문자 지정

function onLoginSubmit(event) {
  event.preventDefault(); //서브밋의 기본실행 새로고침을 막아주고
  loginForm.classList.add(HIDDEN_CLASSNAME); // 사용자가 이름을 입력하면 로그인폼에 .hidden 클래스를 추가하여 숨겨준다
  const username = loginInput.value; //유저네임 변수에 로그인인풋밸류 즉 입력될 사용자 이름을 받아준다
  greeting.innerText = "Hello " + username; //그리팅 변수에 innerText를 사용하여 로그인폼이 없어진후 인사말을 보여줌
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME); //그리팅 클래스의 히든클래스를 지워주면 숨어잇던 h1태그가 보여지며 인사말 출력
}

loginForm.addEventListener("submit", onLoginSubmit); //로긴폼의 이벤트리스너를 만들어 서브밋될때 함수를 구동시킴
