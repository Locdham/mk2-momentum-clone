//
// const loginForm = document.getElementById("loginForm");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 위의 코드를 좀더 짧게 작성하자면..
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// click event 적용할 것인데.. login button 과 연결할것임
function onLoginBtnClick() {
  console.log("hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);
